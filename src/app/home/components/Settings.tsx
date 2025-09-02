"use client";

import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Settings({
  status,
  userName,
  userLogo,
}: {
  status: string;
  userName: string;
  userLogo: string;
}) {
  const router = useRouter();

  return status === "authorized" ? (
    <Button
      disableRipple
      onClick={() => router.push("/authorize")}
      sx={{
        position: "absolute",
        left: "-70px",
        bottom: "clamp(0px, 0.6vw, 10px)",
        outline: "solid 3px #D9D9D9",
        outlineOffset: "-1px",
        height: "clamp(0px, 4vw, 80px)",
        width: "clamp(500px, 49vw, 925px)",
        borderRadius: "40px",
        fontFamily: "Manrope",
        fontSize: "clamp(0px, 1.5vw, 30px)",
        fontWeight: "700",
        color: "#D9D9D9",
        textAlign: "right",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        transition: "background-color ease 0.5s, color ease 0.5s",
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "1.5s",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          borderRadius: "50px",
          left: 0,
          height: "100%",
          width: 0,
          backgroundColor: "#D9D9D9",
          transition: "width 0.5s ease",
          zIndex: -1,
        },

        "&:hover": {
          color: "#09021C",
          "&::before": {
            right: 0,
            left: "auto",
            width: "100%",
          },
        },
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
      Авторизуватись в аккаунт
      <Box
        component="img"
        src={"/images/Comunity.svg"}
        sx={{
          position: "absolute",
          right: "clamp(0px, 0.5vw, 11px)",
          height: "clamp(0px, 3vw, 60px)",
          objectFit: "contain",
        }}
      />
    </Button>
  ) : (
    <Button
      disableRipple
      onClick={() => router.push("/settings")}
      sx={{
        position: "absolute",
        left: "-70px",
        bottom: "clamp(0px, 0.6vw, 10px)",
        outline: "solid 3px #D9D9D9",
        outlineOffset: "-1px",
        height: "clamp(0px, 4vw, 80px)",
        width: "clamp(455px, 49vw, 925px)",
        borderRadius: "40px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        transition: "background-color ease 0.5s, color ease 0.5s",
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "1.5s",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          borderRadius: "50px",
          left: 0,
          height: "100%",
          width: 0,
          backgroundColor: "#D9D9D9",
          transition: "width 0.5s ease",
          zIndex: -1,
        },

        "&:hover": {
          color: "#09021C",
          "&::before": {
            right: 0,
            left: "auto",
            width: "100%",
          },
        },
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
      <Box
        component="img"
        src={"/images/Settings.svg"}
        sx={{
          position: "absolute",
          right: "clamp(0px, 0.5vw, 11px)",
          height: "clamp(0px, 3vw, 60px)",
          objectFit: "contain",
          transition: "transform ease 0.5s",
          ".MuiButton-root:hover &": {
            transform: "rotate(90deg)",
          },
        }}
      />
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontSize: "clamp(0px, 1.5vw, 30px)",
          fontWeight: "700",
          color: "transparent",
          textAlign: "center",
          position: "absolute",
          transition: "color ease 0.5s",
          right: "calc(clamp(0px, 0.5vw, 11px) * 2 + clamp(0px, 3vw, 60px))",
          ".MuiButton-root:hover &": {
            color: "#09021C",
          },
        }}
      >
        Налаштування
      </Typography>
      <Box
        component="img"
        src={userLogo === "" ? "/images/DefaultUserIcon.svg" : userLogo}
        sx={{
          position: "absolute",
          left: "clamp(0px, 0.5vw, 11px)",
          height: "clamp(0px, 3vw, 60px)",
          objectFit: "contain",
          zIndex: -2,
        }}
      />
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontSize: "clamp(0px, 1.5vw, 30px)",
          fontWeight: "700",
          color: "#D9D9D9",
          textAlign: "center",
          position: "absolute",
          left: "calc(clamp(0px, 0.5vw, 11px) * 2 + clamp(0px, 3vw, 60px))",
        }}
      >
        {userName === "" ? "X_Druid" : userName}
      </Typography>
    </Button>
  );
}
