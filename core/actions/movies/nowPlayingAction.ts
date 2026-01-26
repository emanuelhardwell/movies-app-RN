import { movieApi } from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDbResponse";
import { MovieMapper } from "@/infrastructure/mappers/movieMapper";

export const nowPlayingAction = async (path: string) => {
  try {
    const res = await movieApi.get<MovieDBResponse>(path);
    const movies = res.data.results.map((movie) =>
      MovieMapper.fromMovieDBtoMovie(movie)
    );
    return movies;
  } catch (error) {
    console.log(error);
  }
};
