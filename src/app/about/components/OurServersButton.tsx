"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function OurServersButton() {
  const router = useRouter();
  return (
    <Button
      disableRipple
      onClick={() => router.push("/our-servers")}
      sx={{
        position: "absolute",
        bottom: "clamp(0px, 1vw, 20px)",
        right: "clamp(0px, 2vw, 30px)",
        outline: "solid 3px #D9D9D9",
        margin: "3px",
        outlineOffset: "-1px",
        overflow: "hidden",
        height: "clamp(0px, 4vw, 80px)",
        width: "clamp(0px, 22.5vw, 420px)",
        borderRadius: "40px",
        fontFamily: "Manrope",
        fontSize: "clamp(0px, 1.5vw, 30px)",
        fontWeight: "700",
        color: "white",
        transition: "background-color ease 0.5s, color ease 0.5s",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          borderRadius: "50px",
          right: 0,
          height: "100%",
          width: 0,
          backgroundColor: "#D9D9D9",
          transition: "width 0.5s ease",
          zIndex: -1,
        },

        "&:hover": {
          color: "#09021C",
          "&::before": {
            left: 0,
            right: "auto",
            width: "100%",
          },
        },
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "1.6s",
      }}
    >
      Наші сервера
    </Button>
  );
}
