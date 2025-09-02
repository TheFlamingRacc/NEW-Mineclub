import { Typography, Box } from "@mui/material";

export default function BloggerIcon({
  iconUrl,
  subNumber,
  subText,
  name,
  styles,
}: {
  iconUrl?: string;
  subNumber: number;
  subText: string;
  name: string;
  styles: {};
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        ...styles,
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          zIndex: "2",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#AB4BE2",
            width: "clamp(0px, 3vw, 60px)",
            aspectRatio: "3/1",
            borderRadius: "clamp(0px, 0.3vw, 7px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "clamp(0px, 1vw, 14px)",
              letterSpacing: "-3%",
              fontWeight: "700",
              color: "black",
            }}
          >
            {subText}
          </Typography>
        </Box>
        <Box
          component="img"
          src="/images/top_triangle.svg"
          sx={{
            margin: "clamp(0px, 0.3vw, 3px) 0",
          }}
        />
      </Box>
      <Box
        component="img"
        sx={{
          backgroundColor: iconUrl ? "" : "#D9D9D9",
          width: `calc(5vw + calc(${subNumber}px / 10000))`,
          aspectRatio: 1 / 1,
          borderRadius: "1000px",
          boxShadow: "0 0 0 1.5vw rgb(128, 128, 128, 0.61)",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "clamp(0px, 1vw, 16px)",
          letterSpacing: "-3%",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
