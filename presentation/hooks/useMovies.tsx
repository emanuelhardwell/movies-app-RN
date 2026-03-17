import { nowPlayingAction } from "@/core/actions/movies/nowPlayingAction";
import { popularAction } from "@/core/actions/movies/popularAction";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction("/now_playing"),
  });

  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam }) => {
      console.log("pageParam: ", pageParam);

      return popularAction("/popular", pageParam);
    },
    getNextPageParam: (lastPage, pages) => pages.length + 1,
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
