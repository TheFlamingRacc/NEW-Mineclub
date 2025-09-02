import { Box, Typography } from "@mui/material";
import ServersButton from "./components/ServersButton";

export default function ServersLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Manrope",
            fontSize: "clamp(0px, 3vw, 25px)",
            fontWeight: "700",
            letterSpacing: "-3%",
            marginRight: "15%",
            textWrap: "nowrap",
            opacity: "0",
            animation: "fadeIn 1.5s ease forwards",
            animationDelay: "0.5s",
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
          ● Сервера
        </Typography>
        <Box>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 3vw, 28px)",
              opacity: "0",
              animation: "fadeIn 1.5s ease forwards",
              animationDelay: "0.7s",
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
            Ми створюємо наші сервери, орієнтуючись на ваші побажання. Тому,
            якщо достатня кількість гравців захоче певний режим, ми обов'язково
            його додамо. 60% наших оновлень спрямовані лише на те, щоб гравцям
            було комфортніше, адже{" "}
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: "800",
                background:
                  "radial-gradient(circle at 100%, #C6A7D7 0%, #7f6bb8ff 30%, #522FB2 60%, #7f6bb8ff 80%, #C6A7D7 100%)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "animatedTextGradient 15s linear infinite 2s",
              }}
            >
              гравці - це ми
            </span>
          </Typography>
          <ServersButton />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "clamp(0px, 5vw, 75px)",
          marginBottom: "clamp(0px, 5vw, 100px)",
          opacity: "0",
          animation: "fadeIn 1.5s ease forwards",
          animationDelay: "1.2s",
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
            width: "22.5vw",
            height: "16.67vw", // 22.5 / (27/20)
            borderRadius: "clamp(0px, 1.3vw, 25px)",
            backgroundColor: "#202020",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/images/AM.svg"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "22.5vw",
            height: "16.67vw", // 22.5 / (27/20)
            borderRadius: "clamp(0px, 1.3vw, 25px)",
            backgroundColor: "#D9D9D9",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: "0.7vw",
            color: "black",
          }}
        >
          <Box
            component="img"
            src="/images/ph_trophy-bold.svg"
            sx={{
              position: "absolute",
              top: "4%",
              right: "4%",
              width: "clamp(0px, 3vw, 45px)",
              height: "clamp(0px, 3vw, 45px)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 3vw, 45px)",
              fontWeight: "550",
              lineHeight: "clamp(0px, 3vw, 45px)",
            }}
          >
            MineClub
          </Typography>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 2vw, 30px)",
              fontWeight: "550",
            }}
          >
            Основні цінності
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: "disc", // стандартні точки
              paddingLeft: "1.5rem", // відступ для точок
              marginTop: "2vw",
            }}
          >
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Творчість
            </Typography>
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Цілеспрямованість
            </Typography>
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Атмосфера
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "22.5vw",
            height: "16.67vw", // 22.5 / (27/20)
            borderRadius: "clamp(0px, 1.3vw, 25px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/images/MineclubAtmospheric.svg"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "22.5vw",
            height: "16.67vw", // 22.5 / (27/20)
            borderRadius: "clamp(0px, 1.3vw, 25px)",
            backgroundColor: "#D9D9D9",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: "0.7vw",
            color: "black",
          }}
        >
          <Box
            component="img"
            src="/images/servers_icon.svg"
            sx={{
              position: "absolute",
              top: "4%",
              right: "4%",
              width: "clamp(0px, 3vw, 45px)",
              height: "clamp(0px, 3vw, 45px)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 3vw, 45px)",
              fontWeight: "550",
              lineHeight: "clamp(0px, 3vw, 45px)",
            }}
          >
            MineClub
          </Typography>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "clamp(0px, 2vw, 30px)",
              fontWeight: "550",
            }}
          >
            Наші сервера:
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: "disc", // стандартні точки
              paddingLeft: "1.5rem", // відступ для точок
              marginTop: "2vw",
            }}
          >
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Постійно оновлюються
            </Typography>
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Модеруються
            </Typography>
            <Typography
              component="li"
              sx={{
                fontFamily: "Inter",
                fontSize: "clamp(0px, 1.1vw, 20px)",
                fontWeight: 500,
                margin: "0.5vw 0",
              }}
            >
              Підлаштовані під гравців
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
