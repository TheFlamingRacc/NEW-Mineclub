"use client";

import { Box, Typography } from "@mui/material";

export default function TermsAndPrivacy() {
  const handleClick = () => {
    localStorage.setItem("prevPath", "authorize");
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: {
          md: "clamp(50px, 6vw, 50px) 0px clamp(36px, 3vw, 100px) clamp(97px, 8vw, 141px)",
          xs: "0",
        },
      }}
    >
      <Typography
        component="a"
        href="/terms&privacy#terms"
        onClick={handleClick}
        sx={{
          textDecoration: "none",
          color: "inherit",
          letterSpacing: "-5%",
          fontSize: {
            md: "clamp(10px, 0.58vw, 100px)",
            xs: "clamp(0px, 2vw, 10px)",
          },
          marginRight: {
            md: "clamp(3.6px, 0.3vw, 100px)",
            xs: "clamp(3.6px, 0.3vw, 100px)",
          },
          transition: "all 0.2s ease",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.6)",
          },
        }}
      >
        Угода користувача
      </Typography>

      <Typography
        sx={{
          letterSpacing: "-5%",
          fontSize: {
            md: "clamp(10px, 0.58vw, 100px)",
            xs: "clamp(0px, 2vw, 10px)",
          },
        }}
      >
        |
      </Typography>

      <Typography
        component="a"
        href="/terms&privacy#privacy"
        onClick={handleClick}
        sx={{
          textDecoration: "none",
          color: "inherit",
          letterSpacing: "-5%",
          fontSize: {
            md: "clamp(10px, 0.58vw, 100px)",
            xs: "clamp(0px, 2vw, 10px)",
          },
          marginLeft: {
            md: "clamp(3.6px, 0.3vw, 100px)",
            xs: "clamp(3.6px, 0.3vw, 100px)",
          },
          transition: "all 0.2s ease",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.6)",
          },
        }}
      >
        Політика конфіденційності
      </Typography>
    </Box>
  );
}
