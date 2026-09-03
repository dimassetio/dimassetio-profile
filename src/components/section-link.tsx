"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";
import type { PortfolioEvent } from "@/lib/analytics";
import { trackPortfolioEvent } from "@/lib/analytics";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  trackingEvent?: PortfolioEvent;
  trackingData?: Record<string, string | number | boolean | null>;
};

export const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(
  function SectionLink({ href, onClick, target, trackingEvent, trackingData, ...props }, ref) {
    return (
      <Link
        {...props}
        ref={ref}
        href={href}
        target={target}
        onClick={(event) => {
          if (trackingEvent) trackPortfolioEvent(trackingEvent, trackingData);
          onClick?.(event);

          if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            (target && target !== "_self")
          ) {
            return;
          }

          const url = new URL(href, window.location.href);
          const isCurrentPage =
            url.origin === window.location.origin &&
            url.pathname === window.location.pathname &&
            url.search === window.location.search;

          if (!isCurrentPage || !url.hash) return;

          const section = document.getElementById(decodeURIComponent(url.hash.slice(1)));
          if (!section) return;

          event.preventDefault();
          window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
          section.scrollIntoView({ block: "start" });
        }}
      />
    );
  },
);
