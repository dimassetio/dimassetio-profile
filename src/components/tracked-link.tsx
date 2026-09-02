"use client";

import type { ComponentProps } from "react";
import type { PortfolioEvent } from "@/lib/analytics";
import { trackPortfolioEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: PortfolioEvent;
  eventData?: Record<string, string | number | boolean | null>;
};

export function TrackedLink({ event, eventData, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackPortfolioEvent(event, eventData);
        onClick?.(clickEvent);
      }}
    />
  );
}

