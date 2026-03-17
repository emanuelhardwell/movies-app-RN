import { movieApi } from "@/core/api/movieApi";
import { MovieDetailResponse } from "@/infrastructure/interfaces/MovieDetailResponse";
import { MovieMapper } from "@/infrastructure/mappers/movieMapper";

export const movieDetailAction = async (id: string) => {
  try {
    const res = await movieApi.get<MovieDetailResponse>(`/${id}`);
    const data = MovieMapper.fromMovieDetailResponse(res.data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
