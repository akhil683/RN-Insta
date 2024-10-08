import { View, FlatList, Text, Modal } from "react-native";
import Posts from "@/constants/posts";
import { PostCard } from "./PostCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext";

const PostContainer = ({
  handleOpenPress,
}: {
  handleOpenPress: () => void;
}) => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  const [visibleVideoIndex, setVisibleVideoIndex] = useState<number | null>(
    null,
  );
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const index = viewableItems[0].index;
    setVisibleVideoIndex(index);
  });

  // const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <FlatList
        data={Posts}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        contentContainerStyle={{
          gap: 16,
        }}
        renderItem={({ item, index }) => (
          <PostCard
            item={item}
            index={index}
            visibleVideoIndex={visibleVideoIndex}
            handleModal={handleOpenPress}
          />
        )}
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
            color: text,
            marginTop: 6,
          }}
        >
          You're all caught up
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: accentText,
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
