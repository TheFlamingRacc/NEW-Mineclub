import { Typography, Box } from "@mui/material";
import ReturnButton from "../components/ReturnButton";
import NavigationRow from "../components/NavigationRow";
export default function () {
  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        backdropFilter: "blur(10px)", // блюр фону під панеллю
        WebkitBackdropFilter: "blur(10px)", // для Safari
      }}
    >
      <ReturnButton>
        <Typography
          sx={{
            fontFamily: "Manrope",
            color: "rgba(255, 255, 255, 0.75)",
            fontWeight: "400",
            marginTop: "-4px",
          }}
        >
          Умови та політики сайту й сервера
        </Typography>
      </ReturnButton>
      <Box
        sx={{
          display: "block", // показуємо за замовчуванням
          "@media (max-width: 1250px)": {
            display: "none", // ховаємо при 1350px і менше
          },
        }}
      >
        <NavigationRow />
      </Box>
    </Box>
  );
}
