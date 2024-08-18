import React from "react";
import { Stack } from "expo-router";

const FeatureLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: "black",
      }}
    >
      <Stack.Screen
        name="Notifications"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="messages"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
};

export default FeatureLayout;
