import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { movies } from "../../api/movies";
import { IShortMovie } from "./interface/movie.interface";
export const HomePage: React.FC<{}> = () => {
  const [allMovies, setAllMovies] = useState<IShortMovie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    movies
      .getAll()
      .then((response) => {
        setAllMovies(response.data);
        setTimeout(() => setLoading(false), 1000);
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
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {allMovies && allMovies.length > 0 && (
            <Grid
              container
              spacing={3}
              direction="row"
              sx={{ mt: 3, width: "90%", ml: 7 }}
            >
              {allMovies?.map((mov) => {
                if (mov.image)
                  return (
                    <Grid item xs={3}>
                      <CardComponent
                        key={mov._id}
                        title={mov.title}
                        image={
                          "https://www.themoviedb.org/t/p/original" + mov.image
                        }
                        overview={
                          mov.overview.split(" ").slice(0, 35).join(" ") + "..."
                        }
                      />
                    </Grid>
                  );
              })}
            </Grid>
          )}
        </div>
      )}
    </Container>
  );
};
