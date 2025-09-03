import { Typography, Box, Fade } from "@mui/material";
import Footer from "../components/Footer";
import HomeBackground from "./components/HomeBackground";
import CopyIP from "./components/CopyIP";
import Settings from "./components/Settings";
import NavigationMain from "../components/NavigationMain";
import MainSection from "./components/MainSection";
import ButtonLinks from "./components/ButtonLinks";
import { verifyTokenServer } from "../api";
import VerifyTokenError from "./components/VerifyTokenError";

export default async function HomeLayout() {
  const {
    status,
    user: { userName, userLogo },
  } = await verifyTokenServer();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          padding:
            "clamp(0px, 5vw, 46px) clamp(0px, 5vw, 46px) clamp(0px, 8vh, 86px) clamp(0px, 5vw, 46px)",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <Box>
            <Box display={"flex"}>
              <Fade in={true} timeout={1000} unmountOnExit>
                <Typography
                  sx={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontFamily: "Kanit",
                    fontWeight: "800",
                    fontSize: "clamp(0px, 10vw, 60px)",
                    background: "linear-gradient(#7339B5 0%, #C6A7D7 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: "clamp(0px, 7vw, 40px)",
                    marginRight: "25px",
                  }}
                >
                  MINECLUB
                </Typography>
              </Fade>
              <Fade in={true} timeout={2000} unmountOnExit>
                <Typography
                  sx={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontSize: "clamp(0px, 5vw, 28px)",
                    fontWeight: "550",
                    fontFamily: "Manrope",
                    lineHeight: "5px",
                  }}
                >
                  Тебе чекають!
                </Typography>
              </Fade>
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              position={"absolute"}
              sx={{
                bottom: "clamp(0px, 9vw, 120px)",
                left: "-70px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "clamp(0px, 2vw, 25px)",
                  fontWeight: "700",
                  width: "70%",
                  opacity: 0,
                  animation: "fadeInTransform 1s ease forwards",
                  animationDelay: "0.4s",
                  "@keyframes fadeInTransform": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(-20px)",
                    },

                    "100%": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                Давай разом
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  color: "DDDDDD",
                  fontSize: "clamp(0px, 1vw, 17px)",
                  marginTop: "clamp(0px, 1.3vw, 20px)",
                  width: "50%",
                  opacity: 0,
                  animation: "fadeInTransform 1s ease forwards",
                  animationDelay: "0.6s",
                  "@keyframes fadeInTransform": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(-20px)",
                    },

                    "100%": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                Ми тримаємо гравців у курсі всіх новин і подій та завжди поруч з
                аудиторією. Доєднуйся і будь в курсі!
              </Typography>
              <ButtonLinks status={status} />
            </Box>
            <HomeBackground />
            <CopyIP status={status} />
            <Box
              sx={{
                position: "absolute",
                top: "clamp(20px, 2.5vw, 50px)",
                right: "clamp(0px, 33.5vw, 700px)",
                height: "clamp(20px, 3vw, 55px)",
                "@media(max-width: 1650px)": {
                  right: "27vw",
                },
                "@media(max-width: 1025px)": {
                  right: "25.5vw",
                },
              }}
            >
              <NavigationMain />
            </Box>
            <Settings status={status} userName={userName} userLogo={userLogo} />
            <MainSection />
            <Box
              component={"img"}
              src="/images/Logo.svg"
              sx={{
                position: "absolute",
                height: "clamp(0px, 8vw, 150px)",
                width: "clamp(0px, 8vw, 150px)",
                bottom: "clamp(0px, 9vw, 175px)",
                left: "clamp(0px, 26vw, 500px)",
                opacity: 0,
                animation: "fadeIn 1s ease forwards",
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
            />
          </Box>
        </Box>
      </Box>
      <VerifyTokenError status={status} />
      <Footer prevPath="/home" />
    </>
  );
}
