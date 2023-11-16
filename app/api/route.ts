import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type RequestType = {
  name: string;
  phone: string;
};

export async function POST(req: Request) {
  try {
    const { name, phone }: RequestType = await req.json();
  
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
  });
  
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: 'Запрос на обратный звонок',
      text: `Пользователь с именем ${name}, просит перезвонить на номер ${phone}`,
    });
  
    return NextResponse.json(info);
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return 'Error 500';
    }
  }
}
