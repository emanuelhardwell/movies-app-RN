import { nowPlayingAction } from "@/core/actions/movies/nowPlayingAction";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
  });

  return { nowPlayingQuery };
};
