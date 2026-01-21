import { movieApi } from "@/core/api/movieApi";

export const nowPlayingAction = async () => {
  try {
    const res = await movieApi("/now_playing");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
