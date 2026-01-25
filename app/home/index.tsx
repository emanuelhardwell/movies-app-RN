import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-6" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl px-3 mb-2">Movies App</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList title="Popular" movies={popularQuery.data ?? []} />
        <MovieHorizontalList
          title="Mejor calificadas"
          movies={topRatedQuery.data ?? []}
        />
        <MovieHorizontalList
          title="Próximamente en cines"
          movies={upcomingQuery.data ?? []}
        />
        <MovieHorizontalList
          title="Próximamente en cines v2"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
