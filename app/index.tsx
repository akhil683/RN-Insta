import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const StartPage = () => {
  return (
    <SafeAreaView>
      <Text>StartPage</Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartPage;
