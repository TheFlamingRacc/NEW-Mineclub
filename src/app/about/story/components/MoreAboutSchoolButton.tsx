"use client";

import { Button } from "@mui/material";

export default function MoreAboutSchoolButton() {
  return (
    <Button
      disableRipple
      onClick={() =>
        window.open("https://atschool.com.ua/", "_blank", "noopener,noreferrer")
      }
      sx={{
        marginTop: "clamp(0px, 2vw, 31px)",
        position: "relative",
        boxShadow: "0 0 15px 5px rgba(217, 217, 217, 0.3)",
        borderRadius: "23px",
        outline: "solid 3px #D9D9D9",
        outlineOffset: "-1px",
        overflow: "hidden",
        padding: "6px 40px",
        fontSize: "18px",
        fontFamily: "inter",
        fontWeight: "600",
        backgroundColor: "transparent",
        color: "#D9D9D9",
        opacity: "0",
        animation: "fadeIn 1.5s ease forwards",
        animationDelay: "1.1s",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        transition: "background-color ease 0.5s, color ease 0.5s",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          borderRadius: "18px",
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
      }}
    >
      Більше про школу
    </Button>
  );
}
