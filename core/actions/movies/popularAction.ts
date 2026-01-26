import { movieApi } from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDbResponse";
import { MovieMapper } from "@/infrastructure/mappers/movieMapper";

export const popularAction = async () => {
  try {
    const res = await movieApi.get<MovieDBResponse>("/popular");
    const movies = res.data.results.map((movie) =>
      MovieMapper.fromMovieDBtoMovie(movie)
    );
    return movies;
  } catch (error) {
    console.log(error);
  }
};
