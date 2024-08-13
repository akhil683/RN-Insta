import { FlatList, Text } from "react-native";
import Posts from "@/constants/posts";
import { PostCard } from "./PostCard";

const PostContainer = () => {
  return (
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
  );
};
export default PostContainer;
