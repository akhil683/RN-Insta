import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const StartPage = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartPage;
