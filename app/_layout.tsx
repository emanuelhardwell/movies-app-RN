import React from "react";
import { Text, View } from "react-native";

import { nowPlayingAction } from "@/core/actions/movies/nowPlayingAction";
import "../global.css";

const RootLayout = () => {
  nowPlayingAction();

  return (
    <View>
      <Text className="text-3xl m-10">RootLayout</Text>
    </View>
  );
};

export default RootLayout;
