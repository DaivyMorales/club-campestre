import { db } from "@/server/db";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

type UserRequestBody = {
  name: string;
  password: string;
  id: string | number;
  roleId: string | number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, password, id, roleId } = req.body as UserRequestBody;

    try {
      //Email
      const userWithName = await db.user.findFirst({
        where: {
          name,
        },
      });

      if (userWithName && userWithName.name === name) {
        return res
          .status(400)
          .json("There's a existing user with this username");
      }

      //Password
      if (typeof password !== "string" || password.length < 6) {
        return res
          .status(400)
          .json("The password must be at least 6 characters");
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await db.user.create({
        data: {
          name,
          password: hashedPassword,
          id: typeof id === "string" ? id : String(id),
          roleId: typeof roleId === "string" ? roleId : String(roleId),
        },
      });

      return res.status(200).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
