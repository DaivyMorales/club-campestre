import { EmailTemplate } from '@/components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { to, reservation } = req.body as {
    to: string;
    reservation: {
      completeName: string;
      email: string;
      numberOfPeople: number;
      startDate: string;
      endDate: string;
      finalPrice: string;
      payMethod: string;
    };
  };

  if (!to || !reservation) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const { completeName, numberOfPeople, startDate, endDate, finalPrice, payMethod } = reservation;

  const { data, error } = await resend.emails.send({
    from: 'Club Campestre <onboarding@resend.dev>',
    to: "nperezp@ucentral.edu.co",
    subject: 'Confirmación de tu reserva en el Club Campestre',
    react: await EmailTemplate({
      firstName: completeName,
      reservation: {
        completeName,
        numberOfPeople,
        startDate,
        endDate,
        finalPrice,
        payMethod,
      }
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};