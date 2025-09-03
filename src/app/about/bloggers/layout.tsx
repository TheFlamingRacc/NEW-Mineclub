import { Box, Typography } from "@mui/material";
import BloggerIcon from "./components/BloggerIcon";

export default function BloggersLayout() {
  return (
    <Box
      sx={{
        minHeight: "40vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "clamp(0px, 5vw, 60px)",
      }}
    >
      <Box
        sx={{
          // третє (найбільше коло)
          borderRadius: "1000px",
          position: "absolute",
          height: "clamp(0px, 37vw, 700px)",
          width: "clamp(0px, 37vw, 700px)",
          border: "solid 1px rgb(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          animation: "zoomInFade 1s ease forwards",
          animationDelay: "1.5s", // останнім
          "@keyframes zoomInFade": {
            "0%": {
              opacity: 0,
              transform: "scale(0.6)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
        }}
      />
      <Box
        sx={{
          // друге (середнє коло)
          borderRadius: "1000px",
          height: "clamp(0px, 27vw, 550px)",
          position: "absolute",
          width: "clamp(0px, 27vw, 550px)",
          border: "solid 1px rgb(255, 255, 255, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          animation: "zoomInFade 1s ease forwards",
          animationDelay: "1s", // друге
        }}
      />
      <Box
        component="img"
        src="/images/Logo.svg"
        sx={{
          // перше (лого)
          height: "clamp(0px, 10vw, 200px)",
          aspectRatio: "1/1",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.6), 0 0 120px #7F1FC9",
          borderRadius: "clamp(0px, 3vw, 55px)",
          opacity: 0,
          animation: "fadeIn 1s ease forwards",
          animationDelay: "0.5s", // перше
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

      <Box
        sx={{
          position: "absolute",
          top: "clamp(0px, 27vw, 700px)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "clamp(0px, 3vw, 60px)",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            opacity: "0",
            translate: "0 -20px",
            animation: "fadeInSlide 1s ease forwards",
            animationDelay: "1s",
            "@keyframes fadeInSlide": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
                translate: "0",
              },
            },
          }}
        >
          Нас рекомендують
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "clamp(0px, 2vw, 25px)",
            fontWeight: "300",
            letterSpacing: "-2%",
            color: "rgb(255, 255, 255, 0.8)",
            textAlign: "center",
            width: "clamp(0px, 40vw, 800px)",
            opacity: "0",
            translate: "0 -10px",
            animation: "fadeInSlide 1s ease forwards",
            animationDelay: "1.4s",
            "@keyframes fadeInSlide": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
                translate: "0",
              },
            },
          }}
        >
          Тут зібрані блогери, які наразі рекомендують нас своїм аудиторіям як
          найатмосферніший сервер.
        </Typography>
      </Box>
      <BloggerIcon
        subNumber={57000}
        subText={"570k"}
        name={"PoxuuyK"}
        styles={{
          position: "absolute",
          top: "200px",
          left: "200px",
        }}
      />
    </Box>
  );
}
