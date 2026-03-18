import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-4xl sm:text-5xl font-800 tracking-tight mb-2"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        Get in touch
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--muted-foreground)" }}>
        Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you.
      </p>
      <ContactForm />
    </div>
  );
}
