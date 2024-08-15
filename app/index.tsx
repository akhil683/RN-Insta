import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Video } from "expo-av";
import { ResizeMode } from "expo-av";

const StartPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          width: "100%",
          aspectRatio: 3 / 2,
        }}
      >
        <Video
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          volume={1.0}
          shouldPlay
          resizeMode={ResizeMode.COVER}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
        <Text style={{ color: "white", fontSize: 32 }}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartPage;
