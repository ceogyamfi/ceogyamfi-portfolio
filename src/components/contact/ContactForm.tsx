"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "@/actions/contact";
import type { ActionResult } from "@/types";

const initialState: ActionResult = { success: false, error: "" };

const inputClass =
  "w-full px-4 py-2.5 rounded-xl text-sm glass focus:outline-none transition-all duration-200 focus:border-accent";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.01] disabled:opacity-50 disabled:scale-100"
      style={{
        background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
        color: "#fff",
        boxShadow: "0 0 20px var(--accent-glow)",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
      }}
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div
          className="text-2xl font-700 mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Message sent ✦
        </div>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Name</label>
          <input id="contact-name" name="name" type="text" required className={inputClass} style={{ color: "var(--foreground)" }} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Email</label>
          <input id="contact-email" name="email" type="email" required className={inputClass} style={{ color: "var(--foreground)" }} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Subject</label>
        <input id="contact-subject" name="subject" type="text" required className={inputClass} style={{ color: "var(--foreground)" }} />
      </div>
      <div>
        <label htmlFor="contact-body" className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Message</label>
        <textarea
          id="contact-body"
          name="body"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          style={{ color: "var(--foreground)" }}
        />
      </div>
      {!state.success && state.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
