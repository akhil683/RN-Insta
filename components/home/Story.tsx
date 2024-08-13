import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Posts, { PostType } from "@/constants/posts";

const Story = () => {
  return (
    <FlatList
      data={Posts}
      horizontal
      contentContainerStyle={{
        gap: 20,
      }}
      style={{
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
      renderItem={SingleStory}
    />
  );
};

export default Story;

const SingleStory = ({ item }: { item: PostType }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 85,
          width: 85,
          marginBottom: 8,
          backgroundColor: "pink",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: item.user.avatar_url,
          }}
          style={{
            position: "absolute",
            height: 80,
            width: 80,
            borderRadius: 100,
            objectFit: "cover",
            borderWidth: 3,
            borderColor: "black",
          }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 12 }}>akhil_palsra</Text>
    </TouchableOpacity>
  );
};
