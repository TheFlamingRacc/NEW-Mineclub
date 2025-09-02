"use client";

import { Button, Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function NestedRouteNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box
      sx={{
        marginRight: "clamp(0px, 3vw, 100px)",
        display: "flex",
        gap: "26px",
      }}
    >
      <Button
        disableRipple
        onClick={() => {
          pathname === "/about/story" ? "" : router.push("/about/story");
        }}
        sx={{
          position: "relative",
          borderRadius: "23px",
          outline: "solid 3px #D9D9D9",
          outlineOffset: "-1px",
          overflow: "hidden",
          padding: "6px 40px",
          fontSize: "18px",
          fontFamily: "inter",
          fontWeight: "600",
          backgroundColor:
            pathname !== "/about/story" ? "transparent" : "#D9D9D9",
          color: pathname === "/about/story" ? "#09021C" : "#D9D9D9",
          transition: "background-color ease 0.5s, color ease 0.5s",
          ...(pathname !== "/about/story" && {
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
          }),
        }}
      >
        Історія
      </Button>
      <Button
        disableRipple
        onClick={() => {
          pathname === "/about/servers" ? "" : router.push("/about/servers");
        }}
        sx={{
          position: "relative",
          borderRadius: "23px",
          outline: "solid 3px #D9D9D9",
          outlineOffset: "-1px",
          overflow: "hidden",
          padding: "6px 40px",
          fontSize: "18px",
          fontFamily: "inter",
          fontWeight: "600",
          backgroundColor:
            pathname !== "/about/servers" ? "transparent" : "#D9D9D9",
          color: pathname === "/about/servers" ? "#09021C" : "#D9D9D9",
          transition: "background-color ease 0.5s, color ease 0.5s",
          ...(pathname !== "/about/servers" && {
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
          }),
        }}
      >
        Сервера
      </Button>
      <Button
        disableRipple
        onClick={() => {
          pathname === "/about/bloggers" ? "" : router.push("/about/bloggers");
        }}
        sx={{
          position: "relative",
          borderRadius: "23px",
          outline: "solid 3px #D9D9D9",
          outlineOffset: "-1px",
          overflow: "hidden",
          padding: "6px 40px",
          fontSize: "18px",
          fontFamily: "inter",
          fontWeight: "600",
          backgroundColor:
            pathname !== "/about/bloggers" ? "transparent" : "#D9D9D9",
          color: pathname === "/about/bloggers" ? "#09021C" : "#D9D9D9",
          transition: "background-color ease 0.5s, color ease 0.5s",
          ...(pathname !== "/about/bloggers" && {
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
          }),
        }}
      >
        Блогери
      </Button>
    </Box>
  );
}
