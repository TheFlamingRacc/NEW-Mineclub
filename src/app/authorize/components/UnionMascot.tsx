import { Box } from "@mui/material";

export default function UnionMascot() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "2",
        height: "100%",
        width: "auto",
        aspectRatio: "1 / 1",
      }}
    >
      <Box
        component="img"
        src="/images/auth-union1.svg"
        alt="Union"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
        }}
      />
      <Box
        component="img"
        src="/images/mascot.svg"
        alt="Mascot"
        sx={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          height: "80%",
          width: "auto",
        }}
      />
    </Box>
  );
}
