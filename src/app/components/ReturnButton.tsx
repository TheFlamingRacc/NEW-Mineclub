import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReturnHandlerButton from "./ReturnHandlerButton";
import { PropsWithChildren } from "react";

export default function ReturnButton({ children }: PropsWithChildren) {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <ReturnHandlerButton>
        <ArrowBackIosIcon
          sx={{
            color: "#fff",
            fontSize: "clamp(0px, 3vw, 32px)",
            filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))",
            margin: "0",
          }}
        />
      </ReturnHandlerButton>
      <Box>
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontWeight: "500",
            fontSize: "clamp(0px, 3vw, 20px)",
          }}
        >
          MINECLUB
        </Typography>
        <Box
          sx={{
            position: "absolute",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
