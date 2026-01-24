import { useMovies } from "@/presentation/hooks/useMovies";
import { Text, View } from "react-native";

const Home = () => {
  const { nowPlayingQuery } = useMovies();
  return (
    <View>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
};

export default Home;
