import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_AUTH_USER,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_AUTH_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_AUTH_USER,
    to: process.env.NEXT_PUBLIC_NODEMAILER_RECEPTOR,
    subject: `Nuevo mensaje: ${req.body.subject}`,
    text: `${req.body.message} | Escrito por: ${req.body.from}`,
    html: `<div>${req.body.message}</div><p>Escrito por:
    ${req.body.from}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).end();
}
