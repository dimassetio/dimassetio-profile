"use client";

import { track } from "@vercel/analytics";

export type PortfolioEvent =
  | "contact_cta_clicked"
  | "project_selected"
  | "case_study_opened"
  | "project_repository_opened"
  | "resume_downloaded"
  | "email_copied"
  | "external_profile_opened";

type EventData = Record<string, string | number | boolean | null>;

export function trackPortfolioEvent(event: PortfolioEvent, data?: EventData) {
  if (process.env.NEXT_PUBLIC_ENABLE_CUSTOM_ANALYTICS !== "true") return;
  track(event, data);
}
