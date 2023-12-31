import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

export const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "200px", mb: 7 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Typography>{description}</Typography>
              </Grid>
              {element && (
                <Grid item sx={{ mt: 4, width: "100%" }}>
                  <Typography>{element}</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};
