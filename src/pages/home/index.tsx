import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { movies } from "../../api/movies";
import { IMovie, IShortMovie } from "./interface/movie.interface";
import { log } from "console";

export const HomePage: React.FC<{}> = () => {
  const [allMovies, setAllMovies] = useState<IShortMovie[] | null>(null);
  console.log("ACAA", allMovies);

  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const moviesPerPage: number = 20;
  let from = (currentPage - 1) * moviesPerPage;
  let to = currentPage * moviesPerPage;
  const currentMoviesPage = allMovies?.slice(from, to);

  let moviesPage: number = Math.ceil(283 / 20);
  // if (allMovies?.length !== undefined)
  //   moviesPage = Math.ceil(allMovies?.length / moviesPerPage);

  useEffect(() => {
    setLoading(true);
    movies
      .getAll()
      .then((response) => {
        let moviesWithImage = response.data?.filter((mov: IMovie) => mov.image);
        setAllMovies(moviesWithImage);

        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
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
          {currentMoviesPage && currentMoviesPage.length > 0 && (
            <Grid
              container
              spacing={3}
              direction="row"
              sx={{ mt: 3, width: "90%", ml: 7 }}
            >
              {currentMoviesPage?.map((mov) => {
                return (
                  <Grid item xs={3} key={mov._id}>
                    <CardComponent
                      title={mov.title}
                      image={
                        "https://www.themoviedb.org/t/p/original" + mov.image
                      }
                      overview={
                        mov.overview.split(" ").slice(0, 35).join(" ") + "..."
                      }
                      id={mov._id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
                mb: 4,
              }}
            >
              {allMovies?.length !== undefined && (
                <Pagination
                  count={moviesPage}
                  page={currentPage}
                  onChange={handleChangePage}
                  color="primary"
                />
              )}
            </Box>
          </Grid>
        </div>
      )}
    </Container>
  );
};
