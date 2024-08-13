import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: "black",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
