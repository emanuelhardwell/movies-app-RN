import { movieApi } from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDbResponse";
import { MovieMapper } from "@/infrastructure/mappers/movieMapper";

export const popularAction = async (path: string, page: number = 1) => {
  try {
    const res = await movieApi.get<MovieDBResponse>(path, {
      params: {
        page,
      },
    });
    const movies = res.data.results.map((movie) =>
      MovieMapper.fromMovieDBtoMovie(movie),
    );
    return movies;
  } catch (error) {
    console.log(error);
  }
};
