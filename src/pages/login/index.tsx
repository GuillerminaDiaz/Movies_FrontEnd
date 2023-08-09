import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [login, SetLogin] = useState<LoginType>({
    email: "",
    password: "",
  });

  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleChange = (event: any) => {
    SetLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  //const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    LoginValidate.validate(login)
      .then(() => {
        getSuccess(JSON.stringify(login));
      })
      .catch((error) => getError(error.message));
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper
            sx={{
              padding: "1.2em",
              borderRadius: "0.5em",
              backgroundColor: "rgba(13, 15, 61, 0.2)",
            }}
          >
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Log In
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="email"
                value={login.email}
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
              />
              <TextField
                name="password"
                value={login.password}
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mb: 1.5 }}
                onChange={handleChange}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Log In
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
