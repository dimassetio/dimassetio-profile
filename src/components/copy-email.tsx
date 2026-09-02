"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";

export function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied");
      trackPortfolioEvent("email_copied");
    } catch {
      setMessage("Copy failed — use the email link");
    }

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage("Copy email"), 3000);
  }

  const copied = message === "Email copied";

  return (
    <div className="copy-email-wrap">
      <button className="button button-on-dark" type="button" onClick={copy}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span>{message}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {message === "Copy email" ? "" : message}
      </span>
    </div>
  );
}
