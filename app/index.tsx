import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const StartPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
        <Text style={{ color: "white", fontSize: 32 }}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartPage;
