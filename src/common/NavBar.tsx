import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { themePalette } from "../config/theme.config";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  console.log(localStorage);

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: themePalette.NAVBAR }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Movies Plus</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button>
                    <AddCircleOutlineIcon fontSize="large" color="primary" />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button variant="outlined">Sing Up</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
