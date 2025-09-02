"use client";

import { Button } from "@mui/material";
import { showError, showSuccess } from "@/app/toasts";

export default function CopyIP({ status }: { status: string }) {
  const buttonText = status === "authorized" ? "Наші сервера" : "Скопіювати IP";

  const buttonOnClick =
    status === "authorized"
      ? () => (window.location.href = "/servers")
      : () =>
          navigator.clipboard
            .writeText("atmo.mineclub.com.ua")
            .then(() => showSuccess("Успішно скопійовано!"))
            .catch(() => showError("Виникла помилка під час копіювання"));

  return (
    <Button
      disableRipple
      onClick={buttonOnClick}
      sx={{
        position: "absolute",
        top: "clamp(0px, 0.6vw, 10px)",
        right: 0,
        outline: "solid 3px #D9D9D9",
        outlineOffset: "-1px",
        height: "clamp(0px, 4vw, 80px)",
        width: "clamp(0px, 22.5vw, 420px)",
        borderRadius: "50px",
        backgroundColor: "transparent",
        fontFamily: "Manrope",
        fontSize: "clamp(0px, 1.5vw, 30px)",
        fontWeight: "700",
        color: "white",
        overflow: "hidden",
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
        animationDelay: "1.5s",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      {buttonText}
    </Button>
  );
}
