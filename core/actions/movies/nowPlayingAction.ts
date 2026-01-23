import { movieApi } from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDbResponse";
import { MovieMapper } from "@/infrastructure/mappers/movieMapper";

export const nowPlayingAction = async () => {
  try {
    const res = await movieApi.get<MovieDBResponse>("/now_playing");
    const movies = res.data.results.map((movie) =>
      MovieMapper.fromMovieDBtoMovie(movie)
    );
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
};
