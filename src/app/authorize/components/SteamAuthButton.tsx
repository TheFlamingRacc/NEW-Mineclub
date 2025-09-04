"use client";

import { useState, useEffect } from "react";
import { Box, Typography, GlobalStyles, Button, Fade } from "@mui/material";

export default function SteamAuthButton() {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 500); // можна збільшити до 1000 для плавного старту
    return () => clearTimeout(timer);
  }, []);

  const handleSteamLogin = () => {
    window.location.href =
      "https://raw-umbertapir.onpella.app/api/auth/steam/redirect";
  };
  return (
    <>
      <Box
        sx={{
          display: {
            md: "flex",
            xs: "none",
          },
        }}
        alignItems="center"
        marginLeft="clamp(41px, 3.4vw, 44px)"
        gap="clamp(12px, 1vw, 15px)"
      >
        <GlobalStyles
          styles={`
      @property --myColor1 {
        syntax: '<color>';
        initial-value: #23144C;
        inherits: false;
      }

      @property --myColor2 {
        syntax: '<color>';
        initial-value: #522FB2;
        inherits: false;
      }

      @keyframes fadeInText {
        from { opacity: 0; transform: translateX(-5px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}
        />

        <Button
          disableRipple
          onClick={() => handleSteamLogin()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: expanded
              ? "clamp(191px, 15.75vw, 256px)"
              : "clamp(37.6px, 3.1vw, 50px)",
            height: "clamp(37.6px, 3.1vw, 50px)",
            transform: expanded
              ? "translateX(0)"
              : "translateX(clamp(153.5px, 12.65vw, 206px))", // 15.75 - 3.1
            borderRadius: "clamp(15.93px, 1.3125vw, 22px)",
            background:
              "linear-gradient(90deg, var(--myColor2) 0%, var(--myColor1) 100%)",
            transition: "all 1s ease, --myColor1 0.5s, --myColor2 0.5s",
            "&:hover": {
              "--myColor1": "transparent",
              "--myColor2": "#522FB2",
            },
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src="/images/steam-login.svg"
            alt="Steam"
            sx={{
              position: "absolute",
              height: "clamp(25.5px, 2.1vw, 34.2px)",
              width: "clamp(25.5px, 2.1vw, 34.2px)",
              right: "clamp(6px, 0.5vw, 8px)",
            }}
          />
          {expanded && (
            <Typography
              sx={{
                fontFamily: "Inter",
                color: "white",
                fontSize: "clamp(12.4px, 1vw, 16px)",
                opacity: 0,
                animation: "fadeInText 1s ease forwards",
              }}
            >
              Steam
            </Typography>
          )}
        </Button>
        {/* Fade "Авторизація" при ховері */}
        <Fade in={hovered} timeout={500}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "clamp(12.4px, 1vw, 14px)",
              color: "white",
              width: "clamp(76.5px, 6.3vw, 50px)",
              margin: "0px clamp(9.7px, 0.8vw, 10px)",
            }}
          >
            Авторизація
          </Typography>
        </Fade>
      </Box>
      {/* ------------------------------------------mobile------------------------------------------------------ */}
      <Box
        sx={{
          display: {
            md: "none",
            xs: "flex",
          },
          position: "relative",
          overflow: "hidden",
        }}
        alignItems="center"
        margin="clamp(0px, 5vw, 23px) 0 clamp(0px, 5vw, 23px) 0"
      >
        <GlobalStyles
          styles={`
              @property --myColor1 {
                syntax: '<color>';
                initial-value: #23144C;
                inherits: false;
              }
    
              @property --myColor2 {
                syntax: '<color>';
                initial-value: #522FB2;
                inherits: false;
              }
    
              @keyframes fadeInText {
                from { opacity: 0; transform: translateX(-5px); }
                to { opacity: 1; transform: translateX(0); }
              }
            `}
        />

        <Button
          disableRipple
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleSteamLogin}
          sx={{
            display: "flex",
            marginLeft: "clamp(0px, 5vw, 25px)",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "clamp(200px, 60vw, 300px)",
            height: "clamp(37.6px, 3.1vw, 50px)",
            borderRadius: "clamp(15.93px, 1.3125vw, 22px)",
            background:
              "linear-gradient(90deg, var(--myColor2) 0%, var(--myColor1) 100%)",
            transition: "all 1s ease, --myColor1 0.5s, --myColor2 0.5s",
            "&:hover": {
              "--myColor1": "transparent",
              "--myColor2": "#522FB2",
            },
            minWidth: 0,
            zIndex: "2",
          }}
        >
          <Box
            component="img"
            src="/images/steam-login.svg"
            alt="Steam"
            sx={{
              position: "absolute",
              height: "clamp(25.5px, 2.1vw, 34.2px)",
              width: "clamp(25.5px, 2.1vw, 34.2px)",
              right: "clamp(6px, 0.5vw, 8px)",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Inter",
              color: "white",
              fontSize: "clamp(12.4px, 1vw, 16px)",
              opacity: 0,
              animation: "fadeInText 1s ease forwards",
            }}
          >
            Steam
          </Typography>
        </Button>
        <Box
          sx={{
            height: "1px", // товщина
            position: "absolute",
            backgroundColor: "#fff", // білий колір самої лінії
            boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.6)", // ефект світіння
            width: "7%", // Займає весь простір
            zIndex: "0",
          }}
        />
      </Box>
    </>
  );
}
