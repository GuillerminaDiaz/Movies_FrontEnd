import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../api/movies";
import { IMovie } from "../home/interface/movie.interface";
import {
  Box,
  CircularProgress,
  Grid,
  Container,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

export const MovieDetail: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setLoading(true);
    movies
      .getById(id)
      .then((response) => {
        setMovie(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Container>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <Typography variant="h1">{movie?.title}</Typography>
                <Typography variant="h6">{movie?.overview}</Typography>
                <Stack direction="row" spacing={5} mt={2}>
                  <Chip
                    label={`Language: ${movie?.language}`}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={`Date: ${movie?.release_date
                      .toString()
                      .split("T")
                      .slice(0, 1)}`}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={`Rating: ${movie?.rating}`}
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={`https://www.themoviedb.org/t/p/original/${movie?.image}`}
                  alt={movie?.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row">
              {movie?.reviews.map((review) => {
                return (
                  <Grid item>
                    <Typography>{review.comment}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};
