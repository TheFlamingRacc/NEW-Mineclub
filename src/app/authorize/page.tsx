"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Button, Typography, Box } from "@mui/material";
import GoogleAuthButton from "./components/GoogleAuthButton";
import TelegramAuthButton from "./components/SteamAuthButton";
import DiscordAuthButton from "./components/DiscordAuthButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { showError, showSuccess } from "../toasts";

export default function App() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("jwt-token", token);
      verifyToken();
      router.replace("/authorize");
      showSuccess("Вас успішно авторизовано!");
    } else {
      router.replace("/authorize");
    }
  }, [searchParams, router]);

  const verifyToken = async () => {
    const token = localStorage.getItem("jwt-token");

    if (!token || token === "no") {
      console.error("Token not found or invalid");
      return;
    }

    try {
      const response = await fetch(
        "https://raw-umbertapir.onpella.app/api/verify-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Token is valid:", data);
      showSuccess("Токен дійсний");
    } catch (error) {
      console.error("Verification failed:", error);
      showError("Токен не дійсний");
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId="1007104035790-1c62kg6umi96useikrlujn5slo0o171r.apps.googleusercontent.com">
        <GoogleAuthButton />
      </GoogleOAuthProvider>
      <DiscordAuthButton />
      <TelegramAuthButton />
      {/* <Button
        sx={{
          position: "absolute",
        }}
        onClick={() => console.log(localStorage.getItem("jwt-token"))}
      >
        Get token
      </Button>
      <Button
        sx={{
          position: "absolute",
          marginLeft: "100px",
        }}
        onClick={verifyToken}
      >
        Verify token
      </Button> */}
    </>
  );
}
