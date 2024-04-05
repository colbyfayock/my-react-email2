import { Resend } from 'resend';

import { SpaceJellyLoginCodeEmail } from '@/emails/login';

const resend = new Resend('<Your Resend API Key (ex: re_1234)>');

export async function POST(request: Request) {
  const { validationCode } = await request.json();

  const results = await resend.emails.send({
    from: '<Your From Email>',
    to: '<Your To Email>',
    subject: 'Your Space Jelly Login Code',
    react: SpaceJellyLoginCodeEmail({
      validationCode
    })
  });

  return Response.json({
    data: results
  });
}