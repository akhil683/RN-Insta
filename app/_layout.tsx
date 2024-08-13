import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";

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
