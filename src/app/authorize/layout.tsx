import { Box, Typography } from "@mui/material";
import BackgroundVideo from "./components/BackgroundVideo";
import TermsAndPrivacy from "./components/TermsAndPrivacy";
import UnionMascot from "./components/UnionMascot";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          display: {
            xs: "none", // <900
            md: "flex", //900+
          },
        }}
      >
        <BackgroundVideo />
        <Box
          sx={{
            width: "70vw",
            maxWidth: "1000px",
            minWidth: "850px",
            aspectRatio: "8 / 5", // 👈 автоматично виставляє висоту
            padding: "clamp(34px, 3vw, 40px)",
            backgroundColor: "#09021C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3vw",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "clamp(0px, 4.3vw, 65px)",
              border: "0.15vw solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              justifyContent: "flex-end",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 3, // щоб було поверх UnionMascot, якщо треба
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  margin:
                    "clamp(76.8px, 6.33vw, 90px) 0 clamp(48.5px, 4vw, 55px) clamp(170px, 14vw, 215px)",
                }}
              >
                <Typography
                  sx={{
                    background: "linear-gradient(90deg, #510BA7, #C6A7D7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Manrope",
                    fontSize: "clamp(17px, 1.5vw, 24px)",
                    fontWeight: "800",
                    marginRight: "0.3vw",
                  }}
                >
                  MineClub
                </Typography>
              </Box>
              {children}
              <TermsAndPrivacy />
            </Box>
            <UnionMascot />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#09021C",
          display: {
            xs: "flex", // <900
            md: "none", // ≥900px
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "clamp(10px, 10vw, 28px)",
            background: "linear-gradient(0deg, #1A1637 0%, #09021C 53%)",
            margin: "clamp(0px, 4vw, 22px)",
            marginBottom: "clamp(0px, 8vw, 44px)",
            aspectRatio: "1 / 2", // Важливо
            width: "min(90vw, 45vh)", // Гарантує, що він не вийде за межі
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              aspectRatio: "1/1",
              overflow: "hidden",
              margin: "clamp(0px, 2.5vw, 10px)",
              marginBottom: "clamp(0px, 3vw, 17px)",
              borderRadius: "clamp(0px, 6vw, 19px)",
              background: "linear-gradient(0deg, #1A1637 0%, #09021C 71%)",
              display: "flex",
              alignItems: "end",
            }}
          >
            <Box
              component="img"
              src="/images/auth-union-mobile.svg"
              alt="Union"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: "auto",
                width: "80%",
              }}
            />
            <Box
              component="img"
              src="/images/mascot.svg"
              alt="Mascot"
              sx={{
                position: "absolute",
                bottom: 0,
                right: "-7%",
                height: "80%",
                width: "auto",
              }}
            />
            <Box
              sx={{
                margin: "5vw 1vw clamp(0px, 5vw, 15px) clamp(0px, 10vw, 29px)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  background: "linear-gradient(90deg, #510BA7, #C6A7D7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Manrope",
                  fontSize: "clamp(0px, 4.8vw, 24px)",
                  fontWeight: "800",
                }}
              >
                MineClub
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "clamp(0px, 5vw, 25px)",
              marginLeft: "clamp(0px, 2.5vw, 10px)",
            }}
          >
            Вхід з
          </Typography>{" "}
          {children}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "clamp(0px, 2vw, 17px)",
            }}
          >
            <TermsAndPrivacy />
          </Box>
        </Box>
      </Box>
    </>
  );
}
