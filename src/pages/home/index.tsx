import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
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
