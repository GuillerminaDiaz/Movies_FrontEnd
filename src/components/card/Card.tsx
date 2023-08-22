import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
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
      <CardActions
        sx={{
          position: "absolute",
          bottom: 4,
          width: "100%",
          display: "flex",
          alignContent: "space-around",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ mb: 0, width: "70%" }}
          onClick={() => navigation(`/movie/${id}`)}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ mb: 0, width: "30%" }}
          //onClick={() => navigation(`/movie/${id}`)}
        >
          + My List
        </Button>
      </CardActions>
    </Card>
  );
};
