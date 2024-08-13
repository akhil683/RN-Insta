import { View, Text, Image } from "react-native";
import React from "react";

const Story = () => {
  return (
    <View
      style={{
        paddingLeft: 16,
        paddingVertical: 16,
      }}
    >
      <SingleStory />
    </View>
  );
};

export default Story;

const SingleStory = () => {
  return (
    <View>
      <View
        style={{
          height: 70,
          width: 70,
          marginBottom: 8,
        }}
      >
        <Image
          source={require("../../assets/images/white.jpeg")}
          style={{
            position: "absolute",
            height: 70,
            width: 70,
            borderRadius: 100,
            objectFit: "cover",
            borderWidth: 4,
            borderColor: "#888",
          }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 12 }}>akhil_palsra</Text>
    </View>
  );
};
