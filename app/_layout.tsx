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
      <Stack.Screen
        name="messages"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="Notifications"
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
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
