"use client";

import { Button, Typography, Box, GlobalStyles, Fade } from "@mui/material";
import { useEffect, useState } from "react";

export default function DiscordAuthButton() {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 250); // можна збільшити до 1000 для плавного старту
    return () => clearTimeout(timer);
  }, []);

  const handleDiscordLogin = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=1340045492184285225&response_type=code&redirect_uri=https%3A%2F%2Fraw-umbertapir.onpella.app%2Fapi%2Fauth%2Fdiscord%2Fcallback&scope=identify+email+guilds+openid";
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
        marginLeft="clamp(86px, 8.4vw, 140px)"
        marginBottom="clamp(13.35px, 1.1vw, 20px)"
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

        {/* Fade "Авторизація" при ховері */}
        <Fade in={hovered} timeout={500}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "clamp(12.4px, 1vw, 14px)",
              color: "white",
              width: "clamp(76.5px, 6.3vw, 74px)",
              textAlign: "right",
              margin: "0px clamp(9.7px, 0.8vw, 10px)",
            }}
          >
            Авторизація
          </Typography>
        </Fade>

        {/* Кнопка Discord */}
        <Button
          disableRipple
          onClick={handleDiscordLogin}
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
            borderRadius: "clamp(15.93px, 1.3125vw, 22px)",
            background:
              "linear-gradient(90deg, var(--myColor1) 0%, var(--myColor2) 100%)",
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
            src="/images/discord-login.svg"
            alt="Discord"
            sx={{
              position: "absolute",
              height: "clamp(25.5px, 2.1vw, 34.2px)",
              width: "clamp(25.5px, 2.1vw, 34.2px)",
              left: "clamp(6px, 0.5vw, 8px)",
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
              Discord
            </Typography>
          )}
        </Button>
      </Box>
      {/* --------------------------------------------------mobile-------------------------------------------------------- */}
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
          onClick={handleDiscordLogin}
          sx={{
            display: "flex",
            marginLeft: "clamp(0px, 25vw, 100px)",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "clamp(200px, 60vw, 300px)",
            height: "clamp(37.6px, 3.1vw, 50px)",
            borderRadius: "clamp(15.93px, 1.3125vw, 22px)",
            background:
              "linear-gradient(90deg, var(--myColor1) 0%, var(--myColor2) 100%)",
            transition: "all 1s ease, --myColor1 0.5s, --myColor2 0.5s",
            "&:hover": {
              "--myColor1": "#0E0825",
              "--myColor2": "#522FB2",
            },
            minWidth: 0,
            zIndex: "2",
          }}
        >
          <Box
            component="img"
            src="/images/discord-login.svg"
            alt="Discord"
            sx={{
              position: "absolute",
              height: "clamp(25.5px, 2.1vw, 34.2px)",
              width: "clamp(25.5px, 2.1vw, 34.2px)",
              left: "clamp(6px, 0.5vw, 8px)",
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
            Discord
          </Typography>
        </Button>
        <Box
          sx={{
            height: "1px", // товщина
            position: "absolute",
            backgroundColor: "#fff", // білий колір самої лінії
            boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.6)", // ефект світіння
            width: "100%", // Займає весь простір
            zIndex: "0",
          }}
        />
      </Box>
    </>
  );
}
