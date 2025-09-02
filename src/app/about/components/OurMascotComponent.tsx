import { Box, Button, Typography } from "@mui/material";

export default function OurMascotComponent({
  imageData,
  onToggleLike,
  onToggleSave,
}: {
  imageData: {
    id: number;
    image: string;
    likes: number;
    isLiked: boolean;
    isSaved: boolean;
  };
  onToggleLike: () => void;
  onToggleSave: () => void;
}) {
  const { id, image, likes, isLiked, isSaved } = imageData;

  return (
    <Box
      sx={{
        width: "clamp(0px, 26vw, 500px)",
        height: "clamp(0px, 14vw, 260px)",
        overflow: "hidden",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={`Mascot ${id}`}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          borderRadius: "inherit",
          position: "absolute",
        }}
      />

      <Button
        sx={{
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#09021C",
          height: "clamp(0px, 3vw, 40px)",
          width: "clamp(0px, 3vw, 40px)",
          minHeight: "0",
          minWidth: "0",
          padding: "0",
        }}
        onClick={onToggleSave}
        aria-label={isSaved ? "Unsaved" : "Save"}
      >
        <Box
          component="img"
          src={isSaved ? "./images/saved.svg" : "./images/unsaved.svg"}
          sx={{
            width: "clamp(0px, 1vw, 20px)",
            height: "clamp(clamp(0px, 1vw, 20px)",
            position: "absolute",
          }}
        />
      </Button>

      <Button
        sx={{
          position: "relative",
          borderRadius: "50px",
          backgroundColor: "#09021C",
          height: "clamp(0px, 2vw, 40px)",
        }}
        onClick={onToggleLike}
        aria-label={isLiked ? "Unlike" : "Like"}
      >
        <Typography>{likes}</Typography>
        <Box
          component="img"
          src={isLiked ? "./images/liked.svg" : "./images/not-liked.svg"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "inherit",
            position: "absolute",
          }}
        />
      </Button>
    </Box>
  );
}
