import { FlatList, View } from "react-native";
import Posts, { PostType } from "@/constants/posts";
import SingleStory from "../SingleStory";

const Story = () => {
  return (
    <View>
      <FlatList
        data={Posts}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
        }}
        style={{
          paddingVertical: 16,
          marginLeft: 12,
        }}
        renderItem={OneStory}
      />
    </View>
  );
};

export default Story;

const OneStory = ({ item }: { item: PostType }) => {
  return <SingleStory imageUrl={item.user.avatar_url} size={75} />;
};
