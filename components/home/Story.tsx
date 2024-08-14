import { FlatList } from "react-native";
import Posts, { PostType } from "@/constants/posts";
import SingleStory from "../SingleStory";

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
      renderItem={OneStory}
    />
  );
};

export default Story;

const OneStory = ({ item }: { item: PostType }) => {
  return <SingleStory imageUrl={item.user.avatar_url} size={75} />;
};
