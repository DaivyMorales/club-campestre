import { db } from "@/server/db";
import type { NextApiRequest, NextApiResponse } from "next";

type ReservationRequestBody = {
  completeName: string;
  identificationUser: string;
  email: string;
  numberOfPeople: number;
  startDate: Date;
  endDate: Date;
  finalPrice: string;
  payMethod: string;
  userId: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const {
      completeName,
      email,
      numberOfPeople,
      startDate,
      endDate,
      finalPrice,
      payMethod,
      userId,
    } = req.body as ReservationRequestBody;

    try {
      const newReservation = await db.reservation.create({
        data: {
          completeName,
          email,

          numberOfPeople,
          startDate,
          endDate,
          finalPrice,
          userId,
          payMethod,
        },
      });

      return res.status(200).json(newReservation);
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
