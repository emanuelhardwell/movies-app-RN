import { useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Movie } from "../../infrastructure/interfaces/Movie";

interface MainSlideShowProps {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: MainSlideShowProps) => {
  const width = useWindowDimensions().width;
  const ref = useRef<ICarouselInstance>(null);

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={0}
      />
    </View>
  );
};

export default MainSlideShow;
