import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { themePalette } from "../../config/theme.config";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToList } from "../../redux/slices/myList.slice";

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

  const dispatch = useAppDispatch();

  const itemExist = useAppSelector((state) => state.listReducer);

  const [dissabled, setDisabled] = useState<boolean>(false);

  const handlerAddList = () => {
    dispatch(
      addToList({
        id,
        image,
        title,
        overview,
      })
    );
  };

  useEffect(() => {
    itemExist.some((item) => item.id === id)
      ? setDisabled(true)
      : setDisabled(false);
  }, [itemExist, id]);

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
          onClick={handlerAddList}
          disabled={dissabled}
        >
          + My List
        </Button>
      </CardActions>
    </Card>
  );
};
