import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["kberbery88@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>{message}</p>
        </>
      ),
      reply_to: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
