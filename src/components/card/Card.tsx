import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { log } from "console";
import React from "react";
import { themePalette } from "../../config/theme.config";
import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  image: string;
  overview: string;
  id: string;
};

export const CardComponent: React.FC<CardProps> = ({
  title,
  image,
  overview,
  id,
}) => {
  const navigation = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: themePalette.CARD,
        height: "35rem",
        position: "relative",
      }}
    >
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5, fontWeight: "bold" }}>
          {title}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>{overview}</Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 4, width: "100%" }}>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          sx={{ mb: 0 }}
          onClick={() => navigation(`/movie/${id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
