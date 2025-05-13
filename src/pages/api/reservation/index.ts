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

type ReservationUpdateBody = {
  id: string;
  finalPrice: string;
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
  } else if (req.method === "GET") {
    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ message: "userId is required" });
    }

    try {
      const reservations = await db.reservation.findMany({
        where: {
          userId: userId,
        },
      });
      return res.status(200).json(reservations);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "An unknown error occurred" });
    }
  } else if (req.method === "PUT") {
    const { id, finalPrice } = req.body as ReservationUpdateBody;

    if (!id) {
      return res.status(400).json({ message: "Reservation ID is required" });
    }

    try {
      const updatedReservation = await db.reservation.update({
        where: { id },
        data: { finalPrice },
      });
      
      return res.status(200).json(updatedReservation);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "An unknown error occurred" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
