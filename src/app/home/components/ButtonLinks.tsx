"use client";

import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function ButtonLinks({ status }: { status: string }) {
  return (
    <Box display={"flex"}>
      <Box
        sx={{
          height: "30px",
          width: "30px",
          borderRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
          margin: "25px 25px 0 0",
          transition: "background-color 0.5s ease",
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.3)",
          },
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.1s",

          "@keyframes fadeInTransform": {
            "0%": {
              opacity: 0,
              transform: "translateX(-20px)",
            },

            "100%": {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
        onClick={() => {
          window.open(
            "https://www.youtube.com/@MineClub-update",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <Box component={"img"} src="./images/youtube.svg" />
      </Box>
      <Box
        sx={{
          height: "30px",
          width: "30px",
          borderRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
          margin: "25px 25px 0 0",
          transition: "background-color 0.5s ease",
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.3)",
          },
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.4s",

          "@keyframes fadeInTransform": {
            "0%": {
              opacity: 0,
              transform: "translateX(-20px)",
            },

            "100%": {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
        onClick={() => {
          window.open(
            "https://discord.gg/xCF9Ha9b",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <Box component={"img"} src="./images/discord.svg" />
      </Box>
      <Box
        sx={{
          height: "30px",
          width: "30px",
          borderRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
          margin: "25px 25px 0 0",
          transition: "background-color 0.5s ease",
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.3)",
          },
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.8s",

          "@keyframes fadeInTransform": {
            "0%": {
              opacity: 0,
              transform: "translateX(-20px)",
            },

            "100%": {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
        onClick={() => {
          window.open(
            "https://t.me/AMineClub",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <Box component={"img"} src="./images/telegram.svg" />
      </Box>
      {status === "authorized" ? (
        <Box
          sx={{
            height: "30px",
            width: "30px",
            borderRadius: "30px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            cursor: "pointer",
            margin: "25px 25px 0 0",
            transition: "background-color 0.5s ease",
            "&:hover": {
              backgroundColor: "rgba(128, 128, 128, 0.3)",
            },
            opacity: 0,
            animation: "fadeInTransform 1s ease forwards",
            animationDelay: "2.2s",

            "@keyframes fadeInTransform": {
              "0%": {
                opacity: 0,
                transform: "translateX(-20px)",
              },

              "100%": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
          onClick={() => {
            window.open(
              "https://t.me/MineClub_DEV",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <Box component={"img"} src="./images/telegram-support.svg" />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
