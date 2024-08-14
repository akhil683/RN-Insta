import { View, Text } from "react-native";
import React from "react";

const Messages = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32, color: "white" }}>Messages</Text>
    </View>
  );
};

export default Messages;
