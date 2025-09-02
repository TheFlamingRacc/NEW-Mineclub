import { Box, Typography } from "@mui/material";

export default function MainSection() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        position: "absolute",
        top: "clamp(0px, 18vh, 200px)",
        left: "clamp(0px, 26vw, 500px)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontSize: "clamp(0px, 3vw, 50px)",
          fontWeight: "800",
          lineHeight: "80%",
          marginBottom: "15px",
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1s",
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
        Самі
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontSize: "clamp(0px, 3vw, 50px)",
          fontWeight: "800",
          lineHeight: "80%",
          marginBottom: "15px",
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.2s",

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
        Творимо
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontSize: "clamp(0px, 3vw, 50px)",
          fontWeight: "800",
          lineHeight: "80%",
          marginBottom: "15px",
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.4s",

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
        Атмосферу
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontWeight: "600",
          fontSize: "clamp(0px, 1vw, 17px)",
          marginTop: "clamp(0px, 1.3vw, 20px)",
          width: "80%",
          opacity: 0,
          animation: "fadeInTransform 1s ease forwards",
          animationDelay: "1.6s",

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
        А також ми не підтримуємо російські лаунчери.
      </Typography>
    </Box>
  );
}
