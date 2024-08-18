import "react-native-gesture-handler";
import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "@/utils/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarColor: "black",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="StoryDetail"
          options={{
            animation: "fade_from_bottom",
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="Comments"
          options={{
            animation: "fade_from_bottom",
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
