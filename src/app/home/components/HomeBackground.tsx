"use client";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
export default function HomeBackground() {
  const [width, setWidth] = useState<number>(5);
  const [radius, setRadius] = useState<number>(60);

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
        width: "75%",
        marginLeft: "auto",
        backgroundImage: "url(./images/homeBg0.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        borderRadius: `clamp(0px, 4vw, 60px) ${radius}px clamp(0px, 4vw, 60px) ${radius}px`,
        position: "relative",
        WebkitMaskPosition: "100.1% -0.1%, -0.1% 100.1%",

        WebkitMask:
          "url(./images/maskImages/home-top-rigth.svg) center / contain no-repeat, url(./images/maskImages/home-bottom-left.svg) center / contain no-repeat, linear-gradient(#000000 0 0)",
        maskSize: `clamp(0px, 27vw, ${width}px), clamp(0px, 27vw, ${width}px)`,
        maskPosition: "100.1% -0.1%, -0.1% 100.1%",
        maskComposite: "exclude",
        transition:
          "border-radius 0.5s ease, mask-size 1s ease, mask-position 1s ease",
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "0.5s",
      }}
    ></Box>
  );
}
