import { Movie } from "@/infrastructure/interfaces/Movie";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface MovieHorizontalListProps {
  title?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  loadNextPage,
}: MovieHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    /*   console.log("contentOffset; ", contentOffset);
    console.log("layoutMeasurement; ", layoutMeasurement);
    console.log("contentSize; ", contentSize); */

    const add = contentOffset.x + layoutMeasurement.width + 600;
    /* console.log("add; ", add); */

    const isEndReached = add >= contentSize.width;

    if (!isEndReached) return;
    isLoading.current = true;
    console.log("Cargar siguinetes peliculas");
    loadNextPage?.();
  };
  return (
    <View className="mb-3">
      {title && <Text className="text-2xl px-3 mb-2">{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
