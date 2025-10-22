import { about } from "@/data/about";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "Portfolio Contact <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // We are temporarily sending the email to your new developer inbox for testing.
    const toEmail = "your-new-dev-email@gmail.com"; // <-- TODO: REPLACE WITH YOUR NEW GMAIL ADDRESS

    // 1. Send the email to your developer sandbox
    const { data: toYouData, error: toYouError } = await resend.emails.send({
      from: fromEmail,
      to: about.contactEmail,
      subject: `[TEST] New Portfolio Message from ${name}`,
      replyTo: email,
      html: `<p>You have a new test message from your portfolio contact form:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    if (toYouError) {
      return NextResponse.json({ error: toYouError.message }, { status: 500 });
    }

    // 2. Send the confirmation email to the user
    const { data: toUserData, error: toUserError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thank You for Your Message!",
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out through my portfolio. This is a confirmation that your message has been received. I will get back to you as soon as possible.</p>
             <p>Best regards,<br>Junaid Babar</p>`,
    });

    if (toUserError) {
      console.error("Error sending confirmation to user:", toUserError);
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
