import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host:   "smtp.gmail.com",
  port:   587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, who, message } = await req.json() as {
      name: string;
      email: string;
      who: string;
      message?: string;
    };

    if (!name || !email || !who) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const to   = process.env.CONTACT_EMAIL_TO ?? process.env.SMTP_USER;
    const from = `ScopeZero Website <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New enquiry from ${name} — ${who}`,
      text: `
Name:    ${name}
Email:   ${email}
Who:     ${who}
Message: ${message ?? "(none)"}
      `.trim(),
      html: `
<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#0f172a;color:#e2e8f0;border-radius:12px">
  <h2 style="margin:0 0 16px;color:#fff;font-size:18px">New enquiry — ScopeZero Website</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    <tr><td style="padding:8px 0;color:#94a3b8;width:80px">Name</td><td style="padding:8px 0;color:#fff">${name}</td></tr>
    <tr><td style="padding:8px 0;color:#94a3b8">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:#94a3b8">Who</td><td style="padding:8px 0;color:#fff">${who}</td></tr>
    ${message ? `<tr><td style="padding:8px 0;color:#94a3b8;vertical-align:top">Message</td><td style="padding:8px 0;color:#fff">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
  </table>
  <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0">
  <p style="font-size:12px;color:#475569;margin:0">Sent via scopezer0.com contact form</p>
</div>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
