import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { movies } from "../../api/movies";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    movies
      .getById("64cada75aa6e7f4804ffe2d3")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="guenas"
        description="guenas como andan?"
        element={
          <Button fullWidth variant="contained">
            Movies
          </Button>
        }
      ></HeaderComponent>
    </Container>
  );
};
