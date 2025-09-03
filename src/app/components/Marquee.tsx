"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
  reverse?: boolean;
  fontSize?: string | number;
  fontFamily?: string;
  pauseOnHover?: boolean;
  bottomGap?: number;
  addStyles?: object;
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);

  const [copies, setCopies] = useState(3);
  const [duration, setDuration] = useState(20);

  const gapCss = useMemo(() => `${gap}vw`, [gap]);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const measure = measureRef.current;
      if (!container || !measure) return;

      const containerW = container.offsetWidth;
      const baseW = measure.offsetWidth;
      const gapPx = (window.innerWidth * gap) / 100;

      if (baseW === 0) return;

      const needed = Math.ceil(containerW / (baseW + gapPx)) + 2;
      setCopies(Math.max(2, needed));

      const pxPerCycle = baseW + gapPx;
      const secs = pxPerCycle / Math.max(1, speed);
      setDuration(secs);
    };

    update();

    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    if (measureRef.current) ro.observe(measureRef.current);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [children, speed, gap]);

  // Готуємо копії контенту реактово, з унікальними ключами
  const units = useMemo(() => {
    return Array.from({ length: copies }, (_, i) => (
      <Box
        key={`unit-${i}`}
        className="unit"
        sx={{ display: "inline-flex", gap: gapCss, pointerEvents: "auto" }}
      >
        {React.Children.map(children, (child, idx) =>
          React.isValidElement(child) ? (
            React.cloneElement(child, { key: `item-${i}-${idx}` })
          ) : (
            <React.Fragment key={`frag-${i}-${idx}`}>{child}</React.Fragment>
          )
        )}
      </Box>
    ));
  }, [children, copies, gapCss]);

  return (
    <Box
      ref={containerRef}
      sx={{
        ...addStyles,
        overflow: "hidden",
        display: "flex",
        marginBottom: `${bottomGap}vw`,
        alignItems: "center",
        whiteSpace: "nowrap",
        fontSize: fontSize || "inherit",
        fontFamily: fontFamily || "inherit",
        position: "relative",
        "& .track": {
          display: "inline-flex",
          gap: gapCss,
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          ...(pauseOnHover && {
            "&:hover": { animationPlayState: "paused" },
          }),
          // важливо: дозволяємо події на дітях
          pointerEvents: "auto",
        },
        "@keyframes marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 0px)))" },
        },
      }}
    >
      {/* Прихований вимірювач ширини одного сету children */}
      <Box
        ref={measureRef}
        sx={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          display: "inline-flex",
          gap: gapCss,
        }}
      >
        {children}
      </Box>

      <Box className="track">{units}</Box>
    </Box>
  );
}
