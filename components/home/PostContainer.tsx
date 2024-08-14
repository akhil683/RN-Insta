import { View, FlatList, Text } from "react-native";
import Posts from "@/constants/posts";
import { PostCard } from "./PostCard";
import { FontAwesome5 } from "@expo/vector-icons";

const PostContainer = () => {
  return (
    <>
      <FlatList
        data={Posts}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        scrollEnabled={false}
        contentContainerStyle={{
          gap: 16,
        }}
      />
      <View
        style={{
          marginHorizontal: 12,
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          marginVertical: 20,
        }}
      >
        <FontAwesome5 name="check-circle" size={62} color="#E3256B" />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginTop: 6,
          }}
        >
          You're all caught up
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#B4B4B4",
            lineHeight: 20,
          }}
        >
          You've seen all new posts from the past 3 days.
        </Text>
      </View>
    </>
  );
};
export default PostContainer;
