import { nowPlayingAction } from "@/core/actions/movies/nowPlayingAction";
import { popularAction } from "@/core/actions/movies/popularAction";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularAction(),
  });

  return { nowPlayingQuery, popularQuery };
};
