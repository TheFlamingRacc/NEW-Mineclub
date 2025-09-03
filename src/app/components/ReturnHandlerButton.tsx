"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { PropsWithChildren } from "react";

export default function ReturnHandlerButton({ children }: PropsWithChildren) {
  const router = useRouter();

  const handleBack = () => {
    const prevPath = localStorage.getItem("prevPath");

    // якщо шлях існує і не такий самий, як поточний — вертаємось
    if (prevPath && prevPath !== window.location.pathname) {
      router.push(prevPath);
    } else {
      router.push("/"); // запасний шлях, якщо нічого не збережено
    }
  };
  return (
    <Button
      disableRipple
      sx={{
        borderRadius: "0 21px 21px 0",
        height: "clamp(20px, 19vw, 113px)",
        width: "clamp(0px, 8vw, 64px)",
        borderWidth: "3px 3px 3px 0",
        borderStyle: "solid",
        borderColor: "white",
        color: "#fff",
        padding: "0",
        minWidth: "0",
        marginRight: "clamp(0px, 2vw, 15px)",
      }}
      onClick={() => handleBack()}
    >
      {children}
    </Button>
  );
}
