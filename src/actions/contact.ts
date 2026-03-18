"use server";

import { z } from "zod";
import { Resend } from "resend";
import type { ActionResult } from "@/types";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  body: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function submitContactForm(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    body: formData.get("body"),
  });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }

  const { name, email, subject, body } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service not configured." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${body}`,
    });
    return { success: true, data: undefined };
  } catch {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
