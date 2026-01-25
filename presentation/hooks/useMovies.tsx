import { nowPlayingAction } from "@/core/actions/movies/nowPlayingAction";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction("/now_playing"),
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => nowPlayingAction("/popular"),
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: () => nowPlayingAction("/top_rated"),
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => nowPlayingAction("/upcoming"),
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
