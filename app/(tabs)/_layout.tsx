import { Tabs } from "expo-router";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "@/utils/ThemeContext";

export default function TabLayout() {
  const { theme } = useTheme();
  const { background, accentText, text } = theme.colors;
  return (
    <GestureHandlerRootView>
      <Tabs
        screenOptions={{
          tabBarInactiveBackgroundColor: background,
          tabBarActiveBackgroundColor: background,
          tabBarActiveTintColor: text,
          tabBarInactiveTintColor: accentText,
          headerShown: false,
          tabBarShowLabel: false,
          lazy: true,
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Foundation name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
