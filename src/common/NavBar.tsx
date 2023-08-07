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
import React from "react";
import { themePalette } from "../config/theme.config";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: themePalette.NAVBAR }}>
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
                  <Button variant="contained">Login</Button>
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
