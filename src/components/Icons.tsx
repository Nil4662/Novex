/**
 * آیکون‌ها — Inline SVG icons
 * ------------------------------------------------------------------
 * همهٔ آیکون‌ها SVG درون‌خطی هستند: بدون درخواست شبکه، بدون وابستگی بیرونی.
 */

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 22, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconSearch = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

export const IconMenuBars = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Svg>
);

export const IconClose = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const IconArrow = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const IconChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconChevronStart = (p: IconProps) => (
  <Svg {...p}>
    <path d="m14 6-6 6 6 6" />
  </Svg>
);

export const IconChevronEnd = (p: IconProps) => (
  <Svg {...p}>
    <path d="m10 6 6 6-6 6" />
  </Svg>
);

export const IconSliders = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </Svg>
);

export const IconCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 13 4 4L19 7" />
  </Svg>
);

export const IconPhone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </Svg>
);

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Svg>
);

export const IconPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconClock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const IconGlobe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" />
  </Svg>
);

/* ---------- آیکون‌های تصویرساز (placeholder) ---------- */

export const IconStewPot = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 10h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5Z" />
    <path d="M2.5 10h19M8 6c0-1.4 1-2 1-3M12 6c0-1.4 1-2 1-3M16 6c0-1.4 1-2 1-3" />
  </Svg>
);

export const IconBurger = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 9a8 8 0 0 1 16 0Z" />
    <path d="M4 12.5h16M4 16h16" />
    <path d="M5 19h14a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 5 19Z" />
  </Svg>
);

export const IconFish = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12s3.5-5 8-5 7.5 3.5 7.5 5-3 5-7.5 5-8-5-8-5Z" />
    <path d="M18.5 12 22 8.5v7L18.5 12Z" />
    <circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconCup = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 7h11l-1.2 11.5a2 2 0 0 1-2 1.8h-4.6a2 2 0 0 1-2-1.8L6 7Z" />
    <path d="M17 9h1.8a2.2 2.2 0 1 1 0 4.4H16.7M9 3.5v1.8M13 3.5v1.8" />
  </Svg>
);

export const IconSushi = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="12" cy="16" rx="8" ry="4" />
    <path d="M5 15c0-2 3.1-3.5 7-3.5s7 1.5 7 3.5" />
    <path d="M8 11c0-2.8 1.8-5 4-5s4 2.2 4 5" />
  </Svg>
);

export const IconTurtle = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="12" cy="13" rx="7.5" ry="5.5" />
    <path d="M4.5 13c0-3 3.4-5.5 7.5-5.5s7.5 2.5 7.5 5.5" />
    <path d="M12 7.5V19M8 8.5l-1 9M16 8.5l1 9" />
    <circle cx="19.2" cy="10" r="2.1" />
    <circle cx="20" cy="9.4" r="0.5" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconImage = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <circle cx="8.5" cy="10" r="1.6" />
    <path d="m4 17 4.6-4.4a2 2 0 0 1 2.7 0L16 17M14.5 14l1.8-1.7a2 2 0 0 1 2.7 0L21 14" />
  </Svg>
);

export const IconSparkle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
  </Svg>
);

/* ---------- شبکه‌های اجتماعی (نمایشی) ---------- */

export const IconInstagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconTelegram = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 4 3 11l5 2 2 6 3-4 4 3 4-14Z" />
    <path d="m8 13 9-6-6 8" />
  </Svg>
);

export const IconWhatsapp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 0 1-11.9 7L4 20l1.1-4A8 8 0 1 1 20 12Z" />
    <path d="M9.2 9.5c.6-.4 1 .1 1.4.8.3.6-.2 1-.5 1.3.4 1 1.2 1.7 2.2 2 .3-.4.7-.9 1.3-.6.7.4 1.2.8.8 1.4-.5.7-1.8 1-2.9.4a7 7 0 0 1-3.5-3.4c-.5-1-.2-1.9.5-2.4Z" />
  </Svg>
);

export const IconYoutube = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="12" rx="4" />
    <path d="m11 9.5 4 2.5-4 2.5v-5Z" />
  </Svg>
);

export const socialIcons = {
  instagram: IconInstagram,
  telegram: IconTelegram,
  whatsapp: IconWhatsapp,
  youtube: IconYoutube,
} as const;
