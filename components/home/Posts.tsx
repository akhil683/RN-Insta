import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
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
          <View
            style={{
              height: 28,
              width: 28,
              backgroundColor: "white",
              borderRadius: 100,
            }}
          />
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
      <View style={styles.image} />
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
        <Text style={{ color: "white" }}>254 likes</Text>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{item.user.username}</Text>{" "}
          {item.caption}
        </Text>
        <TouchableOpacity style={{ marginTop: 6 }}>
          <Text style={{ color: "gray" }}>View all comments</Text>
        </TouchableOpacity>
      </View>
      {/* Comment Section */}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    backgroundColor: "white",
    width: "100%",
    aspectRatio: 1,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
