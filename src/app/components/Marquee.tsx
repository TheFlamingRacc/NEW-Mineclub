"use client";

import { Box } from "@mui/material";
import { useEffect, useRef, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  gap?: number;
  reverse?: boolean;
  fontSize?: string | number;
  fontFamily?: string;
  pauseOnHover?: boolean;
  bottomGap?: number;
  addStyles?: {};
};

export default function Marquee({
  children,
  speed = 10,
  gap = 3,
  reverse = false,
  fontSize,
  fontFamily,
  pauseOnHover = false,
  bottomGap = 0,
  addStyles = {},
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const child = marquee.firstElementChild as HTMLElement | null;
    if (!child) return;

    const childWidth = child.offsetWidth + gap;
    const containerWidth = marquee.offsetWidth;
    const clonesNeeded = Math.ceil(containerWidth / childWidth) + 1;

    Array.from(marquee.querySelectorAll(".clone")).forEach((c) => c.remove());

    for (let i = 0; i < clonesNeeded; i++) {
      const clone = child.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      marquee.appendChild(clone);
    }

    const duration = childWidth / speed;
    marquee.style.setProperty("--marquee-duration", `${duration}s`);
    marquee.style.setProperty(
      "--marquee-direction",
      reverse ? "reverse" : "normal"
    );
    marquee.style.setProperty("--marquee-gap", `${gap}vw`);
  }, [children, speed, gap, reverse]);

  return (
    <Box
      sx={{
        ...addStyles,
        overflow: "hidden",
        display: "flex",
        marginBottom: `${bottomGap}vw`,
        alignItems: "center",
        whiteSpace: "nowrap",
        fontSize: fontSize || "inherit",
        fontFamily: fontFamily || "inherit",
        "& .track": {
          display: "flex",
          gap: "var(--marquee-gap)",
          animation: "marquee var(--marquee-duration) linear infinite",
          animationDirection: "var(--marquee-direction)",
          ...(pauseOnHover && {
            "&:hover": {
              animationPlayState: "paused",
            },
          }),
        },
        "@keyframes marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--marquee-gap)))" },
        },
      }}
    >
      <Box ref={marqueeRef} className="track">
        <Box display="flex" gap={`${gap}vw`}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
