import { Movie } from "@/infrastructure/interfaces/Movie";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface MovieHorizontalListProps {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: MovieHorizontalListProps) => {
  return (
    <View>
      {title && <Text className="text-2xl px-3 mb-2">{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
