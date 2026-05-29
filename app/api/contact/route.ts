import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length >= 20
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    // In production, integrate with Resend or Nodemailer here.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@alexdev.io",
    //   to: "alex@alexdev.io",
    //   subject: `Portfolio Contact: ${body.subject || "New message from " + body.name}`,
    //   html: `<p><strong>From:</strong> ${body.name} (${body.email})</p><p>${body.message}</p>`,
    // });

    // Mock success for demo
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
