import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Posts from "@/constants/posts";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const StoryUI = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = Posts[userIndex];
  const stories = user.images;
  const storyUrl = stories[storyIndex];

  const goToPrevious = () => {
    setStoryIndex((index) => {
      if (index === 0) {
        goToPrevUser();
        return 0;
      }
      return index - 1;
    });
  };
  const goToPrevUser = () => {
    setUserIndex((index) => {
      if (index === 0) {
        return 0;
      }
      return index - 1;
    });
  };
  const goToNext = () => {
    setStoryIndex((index) => {
      if (index === stories.length - 1) {
        goToNextUser();
        return 0;
      }
      return index + 1;
    });
  };
  const goToNextUser = () => {
    setUserIndex((index) => {
      if (index === Posts.length - 1) {
        router.back();
        return 0;
      }
      return index + 1;
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: storyUrl,
        }}
        style={styles.image}
      />
      <Pressable
        style={[styles.navPressable, { left: 0 }]}
        onPress={goToPrevious}
      />
      <Pressable
        style={[styles.navPressable, { right: 0 }]}
        onPress={goToNext}
      />

      <View style={styles.header}>
        <View style={styles.indicatorRow}>
          {stories.map((story, index) => {
            const color = index <= storyIndex ? "white" : "gray";
            return (
              <View style={[styles.indicator, { backgroundColor: color }]} />
            );
          })}
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user.user.avatar_url }}
            width={24}
            height={24}
            style={{ borderRadius: 100 }}
          />
          <Text style={styles.username}>{user.user.username}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Send Message"
          placeholderTextColor={"white"}
        />
        <FontAwesome name="heart-o" size={28} color="white" />
        <Feather name="send" size={28} color="white" />
      </View>
    </View>
  );
};

export default StoryUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    flex: 1,
  },
  header: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    top: 0,
    width: "100%",
    padding: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
    width: "100%",
    backgroundColor: "black",
  },
  input: {
    borderWidth: 1,
    flex: 1,
    color: "white",
    borderColor: "gray",
    padding: 10,
    borderRadius: 50,
  },
  navPressable: {
    position: "absolute",
    width: "35%",
    height: "100%",
  },
  indicatorRow: {
    gap: 5,
    marginBottom: 8,
    flexDirection: "row",
  },
  indicator: {
    flex: 1,
    borderRadius: 4,
    height: 2,
  },
});
