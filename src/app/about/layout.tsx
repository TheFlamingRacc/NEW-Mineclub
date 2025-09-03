import { Box, Typography } from "@mui/material";
import AboutMainSection from "./components/AboutMainSection";
import Footer from "../components/Footer";
import NavigationMain from "../components/NavigationMain";
import OurServersButton from "./components/OurServersButton";
import Marquee from "../components/Marquee";
import OurMascot from "./components/OurMascot";
import NestedRouteNav from "./components/NestedRouteNav";
import { PropsWithChildren } from "react";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "clamp(0px, 2vw, 20px)",
          height: "100vh",
          position: "relative",
        }}
      >
        <AboutMainSection />
        <Box
          sx={{
            position: "absolute",
            top: "clamp(10px, 7vw, 100px)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <NavigationMain />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(250px, 32vw, 610px)",
          }}
        >
          <Box position={"relative"}></Box>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 4vw, 30px)",
              fontWeight: "800",
              opacity: 0,
              animation: "fadeIn 1.5s ease forwards",
              animationDelay: "1.2s",

              // 🔑 @keyframes
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
            Ми - як історія про
          </Typography>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 13vw, 130px)",
              fontWeight: "800",
              lineHeight: "120px",
              opacity: 0,
              animation: "fadeIn 1.5s ease forwards",
              animationDelay: "1.6s",

              // 🔑 @keyframes
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
            mineclub
          </Typography>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 3vw, 16px)",
              marginTop: "clamp(0px, 2vw, 20px)",
              fontWeight: "600",
              width: "100%",
              textAlign: "center",
              left: "clamp(-130px, -6.5vw, 0px)",
              position: "absolute",
              opacity: 0,
              animation: "fadeIn 1.5s ease forwards",
              animationDelay: "2s",
              // 🔑 @keyframes
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
            Наша історія почалася як клуб у навчальному закладі. З того часу ми
            розвивалися, і тепер ви читаєте це завдяки Атмосферній школі.
          </Typography>
        </Box>
        <OurServersButton />
      </Box>
      <Box
        sx={{
          height: "9vw",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Marquee
          addStyles={{
            opacity: 0,
            animation: "fadeIn 1.5s ease forwards",
            animationDelay: "1.8s",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
          }}
          speed={10}
          gap={3}
          fontSize="2.6vw"
          fontFamily="Minecraft"
        >
          <Box>akr0p</Box>
          <Box>X_Druid</Box>
          <Box>red_mushroom</Box>
          <Box>The_FlamingRacc</Box>
          <Box>OseO_0</Box>
        </Marquee>
      </Box>
      <Box
        sx={{
          padding: "clamp(0px, 2vw, 20px)",
          display: "flex",
          alignItems: "center",
          opacity: 0,
          animation: "fadeIn 1.5s ease forwards",
          animationDelay: "2s",
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
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "white",
            boxShadow: "0 0 4px white, 0 0 6px white", // м’який, невеликий glow
          }}
        />
        <Typography
          sx={{
            fontFamily: "Minecraft",
            fontSize: "2vw",
            margin: "0 clamp(0px, 10vw, 100px)",
            background:
              "radial-gradient(circle at 100%, #F2C6DE 0%, #C88ED9 30%, #9863E7 60%, #C88ED9 80%, #F2C6DE 100%)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap", // замість textWrap
            position: "relative", // щоб працював right
            right: "-500px",
            animation: `
      animatedTextGradient 7s linear infinite 2s,
      slideIn 1.5s ease forwards 1.8s
    `,
            "@keyframes slideIn": {
              "0%": {
                right: "-500px",
              },
              "100%": {
                right: 0,
              },
            },
            "@keyframes animatedTextGradient": {
              to: {
                backgroundPosition: "200% center",
              },
            },
          }}
        >
          Пошана гравцям
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "clamp(0px, 2vw, 20px)",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          opacity: 0,
          animation: "fadeIn 1.5s ease forwards 1.8s",
          animationDelay: "2.2s",
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
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: "white",
            boxShadow: "0 0 4px white, 0 0 6px white", // м’який, невеликий glow
          }}
        />
        <Typography
          sx={{
            fontFamily: "Manrope",
            fontSize: "4vw",
            position: "relative",
            fontWeight: "600",
            margin: "0 clamp(0px, 3vw, 100px)",
            textWrap: "nowrap",
            left: "-500px",
            animation: "slideIn2 1.5s ease forwards 1.8s",
            animationDelay: "2.2s",
            "@keyframes slideIn2": {
              "0%": {
                left: "-500px",
              },
              "100%": {
                left: 0,
              },
            },
          }}
        >
          Наш маскот
        </Typography>
      </Box>
      {/* <OurMascot /> */}
      <Box
        display={"flex"}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "clamp(0px, 2vw, 20px)",
          opacity: 0,
          animation: "fadeIn 1.5s ease forwards",
          animationDelay: "3s",
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
        <NestedRouteNav />
        <Box
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: "white",
            boxShadow: "0 0 4px white, 0 0 6px white", // м’який, невеликий glow
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "clamp(0px, 2vw, 20px)",
          opacity: "0",
          animation: "fadeIn 1.5s ease forwards",
          animationDelay: "3.3s",
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
        {children}
      </Box>
      <Footer prevPath="/about/story" />
    </Box>
  );
}
