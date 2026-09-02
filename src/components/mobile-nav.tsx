"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  function close(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        className="icon-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => (open ? close(true) : setOpen(true))}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") close(true);
          }}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => close()}
              >
                {item.label}
              </Link>
            ))}
            <Link className="button button-primary" href="/#contact" onClick={() => close()}>
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
