"use client";

import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Button, Typography, Box, GlobalStyles, Fade } from "@mui/material";
import { useState, useEffect } from "react";
import { showError, showSuccess } from "@/app/toasts";

function GoogleAuthButtonInner() {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 10); // можна збільшити до 1000 для плавного старту
    return () => clearTimeout(timer);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      const accessToken = res.access_token;
      console.log("Access Token:", accessToken);

      try {
        const response = await fetch(
          `https://raw-umbertapir.onpella.app/api/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_token: accessToken }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (data.token) {
          localStorage.setItem("jwt-token", data.token);
        } else {
          localStorage.setItem("jwt-token", "no");
        }

        showSuccess("Вас успішно авторизовано!");
      } catch (error) {
        console.error(error);
        showError("Виникла помилка під час авторизації...");
      }
    },
    onError: () => {
      console.error("Login Failed");
      showError("Виникла помилка під час авторизації...");
    },
  });

  return (
    <>
      {/* desktop */}
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
        marginBottom="clamp(13.354px, 1.1vw, 20px)"
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

        {/* Кнопка Google */}
        <Button
          disableRipple
          onClick={() => login}
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
              ? "translateX(0px)"
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
            src="/images/google-login.svg"
            alt="Discord"
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
              Google
            </Typography>
          )}
        </Button>
        {/* Fade "Авторизація" при ховері */}
        <Fade in={hovered} timeout={500}>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "white",
              margin: "0px clamp(9.7px, 0.8vw, 10px)",
              fontSize: "clamp(12.4px, 1vw, 14px)",
              width: "clamp(76.5px, 6.3vw, 50px)",
            }}
          >
            Авторизація
          </Typography>
        </Fade>
      </Box>
      {/* --------------------------------------------------------------mobile------------------------------------------------------------------- */}
      <Box
        sx={{
          display: {
            md: "none",
            xs: "flex",
          },
          overflow: "hidden",
        }}
        alignItems="center"
        margin="clamp(0px, 5vw, 23px) 0 clamp(0px, 5vw, 23px) clamp(0px, 2vw, 10px)"
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

        {/* Кнопка Google */}
        <Button
          disableRipple
          onClick={() => login}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            display: "flex",
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
          }}
        >
          <Box
            component="img"
            src="/images/google-login.svg"
            alt="Discord"
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
            Google
          </Typography>
        </Button>
        <Box
          sx={{
            height: "1px", // товщина
            backgroundColor: "#fff", // білий колір самої лінії
            boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.6)", // ефект світіння
            flexGrow: 1, // Займає весь простір
          }}
        />
      </Box>
    </>
  );
}

export default function GoogleAuthButton() {
  return (
    <GoogleOAuthProvider clientId="1007104035790-1c62kg6umi96useikrlujn5slo0o171r.apps.googleusercontent.com">
      <GoogleAuthButtonInner />
    </GoogleOAuthProvider>
  );
}
