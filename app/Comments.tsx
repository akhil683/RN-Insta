import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";

const Comments = () => {
  const { theme } = useTheme();
  const { background, text } = theme.colors;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32, color: text }}>No Comments</Text>
    </View>
  );
};

export default Comments;
