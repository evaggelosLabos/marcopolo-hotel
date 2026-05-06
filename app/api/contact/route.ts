import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, website, startedAt } = await req.json();

    // Honeypot: if filled, pretend success but do not send email
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Minimum time protection: block instant bot submissions
    if (!startedAt || Date.now() - Number(startedAt) < 3000) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 150 ||
      (phone && phone.length > 50) ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "Invalid message." },
        { status: 400 }
      );
    }

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY as string,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Marco Polo Website",
          email: "noreply@marcopolocorfu.com",
        },
         to: [
  {
    email: "vagjelis.8@gmail.com",
    name: "Marco Polo Hotel",
  },
  {
    email: "office@marcopolohotel.com",
    name: "Marco Polo Office",
  },
],
        replyTo: {
          email,
          name,
        },
        subject: `New contact message from ${name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
            <h2 style="color: #1f4e5f;">New Contact Form Message</h2>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    const data = await brevoRes.json();

    if (!brevoRes.ok) {
      console.error("BREVO_CONTACT_ERROR:", data);

      return NextResponse.json(
        { error: "Email sending failed." },
        { status: 500 }
      );
    }

    console.log("BREVO_CONTACT_SUCCESS:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}