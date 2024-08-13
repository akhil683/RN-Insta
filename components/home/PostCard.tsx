import React, { MutableRefObject, useRef, useState } from "react";
import { PostType } from "@/constants/posts";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";

export const PostCard = ({ item }: { item: PostType }) => {
  const [activeLike, setActiveLike] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  // const doubleTap = Gesture.Tap()
  //   .numberOfTaps(2)
  //   .onEnd(() => {
  //     setActiveLike(true);
  //   });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const onViewableItemsChanged = useRef((item: any) => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  return (
    <View>
      {/* USER */}
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.userBox}>
          <Image
            source={{
              uri: item.user.avatar_url,
            }}
            width={32}
            height={32}
            style={{
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
          <Text style={{ color: "white" }}>{item.user.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {/* USER */}

      {/* IMAGE */}
      <View>
        <ImageContainer
          items={item}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        {item.images.length > 1 && (
          <View
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              zIndex: 10,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              {currentSlideIndex + 1}/{item.images.length}
            </Text>
          </View>
        )}
      </View>
      {/* IMAGE */}

      {/* Comment Section */}
      <View style={styles.iconContainer}>
        <View style={styles.likeBox}>
          <TouchableOpacity onPress={() => setActiveLike(!activeLike)}>
            {activeLike ? (
              <FontAwesome name="heart" size={24} color="red" />
            ) : (
              <FontAwesome name="heart-o" size={24} color="white" />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="comment" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setActiveBookmark(!activeBookmark)}>
          {activeBookmark ? (
            <FontAwesome name="bookmark" size={24} color="white" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.captionContainer}>
        <Text style={{ color: "white" }}>{item.likes} likes</Text>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{item.user.username}</Text>{" "}
          {item.caption}
        </Text>
        <TouchableOpacity style={{ marginTop: 6 }}>
          <Text style={{ color: "gray" }}>View all comments</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>28 May, 2019</Text>
      </View>
      {/* Comment Section */}
    </View>
  );
};

const ImageContainer = ({
  items,
  onViewableItemsChanged,
  viewabilityConfig,
}: {
  items: PostType;
  onViewableItemsChanged: MutableRefObject<(item: any) => void>;
  viewabilityConfig: MutableRefObject<{ itemVisiblePercentThreshold: number }>;
}) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      data={items.images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      renderItem={({ item }: { item: string }) => (
        <View style={(styles.ImageContainer, { width: width, aspectRatio: 1 })}>
          <Image
            source={{
              uri: item,
            }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  ImageContainer: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  userBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  likeBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  captionContainer: {
    paddingHorizontal: 12,
  },
});
