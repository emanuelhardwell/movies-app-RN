import { movieApi } from "@/core/api/movieApi";
import { MovieDBResponse } from "@/infrastructure/interfaces/movieDbResponse";

export const nowPlayingAction = async () => {
  try {
    const res = await movieApi.get<MovieDBResponse>("/now_playing");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
