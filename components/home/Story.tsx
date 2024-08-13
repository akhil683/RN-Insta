import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
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
        marginHorizontal: 12,
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
          height: 80,
          width: 80,
          marginBottom: 8,
          backgroundColor: "#E3256B",
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
            height: 75,
            width: 75,
            borderRadius: 100,
            objectFit: "cover",
            borderWidth: 3,
            borderColor: "black",
          }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
        akhil_palsra
      </Text>
    </TouchableOpacity>
  );
};
