import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Posts, { PostType } from "@/constants/posts";

const PostContainer = () => {
  return (
    <FlatList
      data={Posts}
      renderItem={Post}
      keyExtractor={(item) => item.id}
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

const Post = ({ item }: { item: PostType }) => {
  return (
    <View>
      {/* USER */}
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.userBox}>
          {/* <View */}
          {/*   style={{ */}
          {/*     height: 28, */}
          {/*     width: 28, */}
          {/*     borderRadius: 100, */}
          {/*     overflow: "hidden", */}
          {/*   }} */}
          {/* > */}
          <Image
            source={{
              uri: item.user.avatar_url,
            }}
            width={32}
            height={32}
            style={{
              objectFit: "cover",
              borderRadius: 100,
            }}
          />
          {/* </View> */}
          <Text
            style={{
              color: "white",
            }}
          >
            {item.user.username}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {/* USER */}

      {/* IMAGE */}
      <ImageContainer images={item.images} />
      {/* IMAGE */}

      {/* Comment Section */}
      <View style={styles.iconContainer}>
        <View style={styles.likeBox}>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="comment" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={24} color="white" />
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
const ImageContainer = ({ images }: { images: string[] }) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={({ item }: { item: string }) => (
        <View style={(styles.ImageContainer, { width: width, aspectRatio: 1 })}>
          <Image
            source={{
              uri: item,
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
