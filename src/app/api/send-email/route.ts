import { about } from "@/data/about";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = "Portfolio Contact <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json().catch(() => null);
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email and message are required.",
        },
        { status: 400 }
      );
    }

    // We are temporarily sending the email to your new developer inbox for testing.
    const toEmail = "junaidbabar121@gmail.com";

    // 1. Send the email to your developer sandbox
    const toYou = await resend.emails.send({
      from: fromEmail,
      to: about.contactEmail || toEmail,
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `<p>You have a new message from your portfolio contact form:</p>
             <p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Message:</strong></p>
             <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });

    if (!toYou || (toYou as any).error) {
      const err =
        (toYou as any).error?.message || "Failed to send email to developer.";
      return NextResponse.json({ error: err }, { status: 500 });
    }

    // 2. Send the confirmation email to the user
    try {
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "Thank You for Your Message!",
        html: `<p>Hi ${escapeHtml(name)},</p>
             <p>Thank you for reaching out through my portfolio. This is a confirmation that your message has been received. I will get back to you as soon as possible.</p>
             <p>Best regards,<br>Junaid Babar</p>`,
      });
    } catch (e) {
      // Log but don't fail the whole request for confirmation email issues
      console.error("Error sending confirmation to user:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error: any) {
    // Always return JSON to the client to avoid HTML error pages
    console.error("/api/send-email error:", error);
    return NextResponse.json(
      { error: error?.message || String(error) },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
