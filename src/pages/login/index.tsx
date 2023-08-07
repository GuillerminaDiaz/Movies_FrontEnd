import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">Log In</Typography>
            <Box component="form">
              <TextField />
              <TextField />
              <Button type="submit">Submit</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
