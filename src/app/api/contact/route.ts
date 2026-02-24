import { NextRequest, NextResponse } from "next/server";

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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type":  "application/json",
      },
      body: JSON.stringify({
        from:     process.env.RESEND_FROM ?? "website@scopezer0.com",
        to:       [process.env.CONTACT_EMAIL_TO!],
        reply_to: `${name} <${email}>`,
        subject:  `New enquiry from ${name} — ${who}`,
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
</div>`.trim(),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[contact] Resend error:", res.status, body);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
