"use client";

import { Moon, Sun } from "lucide-react";
import type { MouseEvent } from "react";

const THEME_STORAGE_KEY = "theme";
const THEME_TRANSITION_DURATION = 760;
const VIEWPORT_COVER_OFFSET = 0.88;
const RADIUS_OVERSHOOT = 1.08;

type ThemeViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => ThemeViewTransition;
};

let isThemeTransitioning = false;

export function ThemeToggle() {
  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (isThemeTransitioning) return;

    const root = document.documentElement;
    const currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const buttonBounds = event.currentTarget.getBoundingClientRect();
    const originX = buttonBounds.left + buttonBounds.width / 2;
    const originY = buttonBounds.top + buttonBounds.height / 2;

    const applyTheme = () => {
      root.dataset.theme = nextTheme;
      root.style.colorScheme = nextTheme;

      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // The theme still changes when storage is unavailable (for example, private mode).
      }
    };

    const transitionDocument = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!transitionDocument.startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    isThemeTransitioning = true;
    const transition = transitionDocument.startViewTransition(applyTheme);

    void transition.ready.then(() => {
      const viewportWidth = Math.max(
        window.innerWidth,
        document.documentElement.clientWidth,
        window.visualViewport?.width ?? 0,
      );
      const viewportHeight = Math.max(
        window.innerHeight,
        document.documentElement.clientHeight,
        window.visualViewport?.height ?? 0,
      );
      const viewportRadius =
        Math.hypot(
          Math.max(originX, viewportWidth - originX),
          Math.max(originY, viewportHeight - originY),
        ) * RADIUS_OVERSHOOT;

      const pageWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth,
        viewportWidth,
      );
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        viewportHeight,
      );
      const pageOriginX = originX + window.scrollX;
      const pageOriginY = originY + window.scrollY;
      const pageRadius =
        Math.hypot(
          Math.max(pageOriginX, pageWidth - pageOriginX),
          Math.max(pageOriginY, pageHeight - pageOriginY),
        ) * RADIUS_OVERSHOOT;

      root.animate(
        [
          { clipPath: `circle(0 at ${originX}px ${originY}px)` },
          {
            clipPath: `circle(${viewportRadius}px at ${originX}px ${originY}px)`,
            offset: VIEWPORT_COVER_OFFSET,
          },
          { clipPath: `circle(${pageRadius}px at ${originX}px ${originY}px)` },
        ],
        {
          duration: THEME_TRANSITION_DURATION,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });

    void transition.finished.finally(() => {
      isThemeTransitioning = false;
    });
  }

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
    >
      <Moon className="theme-icon moon-icon" aria-hidden="true" />
      <Sun className="theme-icon sun-icon" aria-hidden="true" />
    </button>
  );
}
