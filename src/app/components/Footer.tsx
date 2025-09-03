"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer({ prevPath }: { prevPath?: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "auto",
        color: "#fff",
      }}
    >
      <Box
        component="img"
        src="/images/footer.svg"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "20%",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "clamp(0px, 1vw, 25px)",
            height: "clamp(0px, 1vw, 15px)",
            borderRadius: "clamp(0px, 1vw, 10px)",
            background:
              "radial-gradient(circle at 100%, #C6A7D7 0%, #B38FCF 20%, #8C4DBA 40%, #6D229B 60%, #8C4DBA 80%, #B38FCF 90%, #C6A7D7 100%)",
            backgroundSize: "200% auto",
            animation: "animatedTextGradient 10s linear infinite 2s",
          }}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding:
              "clamp(0px, 1vw, 25px) clamp(0px, 2vw, 50px) 0 clamp(0px, 2vw, 50px)",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "clamp(0px, 2vw, 30px)",
            }}
          >
            <Link
              href="/terms&privacy#privacy-policy"
              onClick={() =>
                prevPath && localStorage.setItem("prevPath", prevPath)
              }
              style={{ textDecoration: "none" }} // базові стилі через `style`
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  letterSpacing: "-5%",
                  fontSize: "clamp(11px, 1.2vw, 24px)",
                  "@media (max-width:525px)": {
                    fontSize: "2vw",
                  },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                }}
              >
                Політика конфіденційності
              </Typography>
            </Link>
            <Link
              href="/terms&privacy#user-agreement"
              onClick={() =>
                prevPath && localStorage.setItem("prevPath", prevPath)
              }
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  letterSpacing: "-5%",
                  fontSize: "clamp(11px, 1.2vw, 24px)",
                  "@media (max-width:525px)": {
                    fontSize: "2vw",
                  },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                }}
              >
                Угода користувача
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column-reverse",
              },
              justifyContent: {
                xs: "flex-end",
                md: "flex-start",
              },
              alignItems: {
                xs: "flex-end",
                md: "flex-start",
              },
              gap: "clamp(0px, 2vw, 30px)",
            }}
          >
            <Link
              href="/terms&privacy#payment-terms"
              onClick={() =>
                prevPath && localStorage.setItem("prevPath", prevPath)
              }
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  letterSpacing: "-5%",
                  fontSize: "clamp(11px, 1.2vw, 24px)",
                  "@media (max-width:525px)": {
                    fontSize: "2vw",
                  },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                }}
              >
                Умови оплати
              </Typography>
            </Link>
            <Link
              href="/terms&privacy#refund-policy"
              onClick={() =>
                prevPath && localStorage.setItem("prevPath", prevPath)
              }
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  letterSpacing: "-5%",
                  fontSize: "clamp(11px, 1.2vw, 24px)",
                  "@media (max-width:525px)": {
                    fontSize: "2vw",
                  },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                }}
              >
                Політика повернення коштів
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "clamp(0px, 0.5vw, 20px)",
              justifyContent: "center",
              width: "100%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              textAlign={"center"}
              fontSize={"clamp(5px, 1.2vw, 24px)"}
            >
              © 2025 The site is the property of MineClub. All rights reserved.
            </Typography>
            <Typography
              textAlign={"center"}
              fontSize={"clamp(0px, 1.2vw, 24px)"}
              color={'color: "rgba(255, 255, 255, 0.75)'}
            >
              Not an official Minecraft product. We are in no way affiliated
              with or endorsed by Mojang Synergies AB, Microsoft Corporation or
              other rightsholders.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
