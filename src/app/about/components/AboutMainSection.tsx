"use client";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function AboutMainSection() {
  const [width, setWidth] = useState(5);
  const [radius, setRadius] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(500);
      setRadius(0);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      id="backgroundImageHome"
      sx={{
        height: "100%",
        width: "100%",
        filter: "blur(5px)",
        marginLeft: "auto",
        backgroundImage: "url(/images/homeBg0.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        borderRadius: `60px 60px ${radius}px 60px`,
        position: "relative",
        WebkitMaskPosition: "100.1% 100.1%",
        WebkitMask:
          "url(/images/maskImages/home-bottom-right.svg) center / contain no-repeat, linear-gradient(#000000 0 0)",
        maskSize: `clamp(0px, 27vw, ${width}px)`,
        maskPosition: "100.1% 100.1%",
        maskComposite: "exclude",
        transition:
          "border-radius 0.5s ease, mask-size 1s ease, mask-position 1s ease",
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "0.5s",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: "url(./images/homeBg0.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
          borderRadius: `60px 60px ${radius}px 60px`,
          transition: "border-radius 0.5s ease",
        },
      }}
    ></Box>
  );
}
