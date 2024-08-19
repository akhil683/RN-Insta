import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "@/constants/User";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import SingleStory from "@/components/SingleStory";
import { router } from "expo-router";
import { useTheme } from "@/utils/ThemeContext";

const ProfilePage = () => {
  const [active, setActive] = useState("posts");
  const { theme } = useTheme();
  const { background, accent, accentText, text } = theme.colors;
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.navContainer}>
          <View style={styles.username}>
            <Text style={[styles.usernameText, { color: text }]}>
              {User.username}
            </Text>
            <AntDesign name="down" size={16} color={text} />
          </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <FontAwesome6 name="threads" size={24} color={text} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="plussquareo" size={24} color={text} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(screens)/settings")}
            >
              <Feather name="menu" size={24} color={text} />
            </TouchableOpacity>
          </View>
        </View>
        {/* MENU CONTAINER */}

        {/* INFO CONTAINER */}
        <View style={styles.infoContainer}>
          <SingleStory size={85} imageUrl={User.avatar_url} />
          <View style={styles.infoDataContainer}>
            <View style={styles.dataContainer}>
              <Text style={[styles.infoValueText, { color: text }]}>
                {User.posts}
              </Text>
              <Text style={{ color: text }}>posts</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={[styles.infoValueText, { color: text }]}>
                {User.followers}
              </Text>
              <Text style={{ color: text }}>followers</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={[styles.infoValueText, { color: text }]}>
                {User.following}
              </Text>
              <Text style={{ color: text }}>following</Text>
            </View>
          </View>
        </View>
        {/* INFO CONTAINER */}
        {/* BIO CONTAINER */}
        <View style={{ marginHorizontal: 6 }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.threads,
                { backgroundColor: accent, color: text, opacity: 0.8 },
              ]}
            >
              {User.threadName}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.bio, { color: text }]}>{User.bio}</Text>
        </View>
        {/* BIO CONTAINER */}

        {/* EDIT BUTTONS */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buttonText, { backgroundColor: accent }]}
          >
            <Text style={{ color: text, textAlign: "center" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonText, { backgroundColor: accent }]}
          >
            <Text style={{ color: text, textAlign: "center" }}>
              Share Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: accent }]}
          >
            <Ionicons name="person-add-outline" size={18} color={text} />
          </TouchableOpacity>
        </View>
        {/* EDIT BUTTONS */}

        {/* HIGHLIGHTS */}
        <View style={styles.highlightContainer}>
          <SingleStory
            size={75}
            active={false}
            text={"Dream Trip"}
            imageUrl={User.avatar_url}
          />
          <SingleStory
            size={75}
            active={false}
            text={"Mountains"}
            imageUrl={User.avatar_url}
          />
          <TouchableOpacity>
            <View
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                borderColor: text,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add" size={32} color={text} />
            </View>
            <Text style={{ color: text, fontSize: 12, textAlign: "center" }}>
              New
            </Text>
          </TouchableOpacity>
        </View>
        {/* HIGHLIGHTS */}

        {/* POSTS */}
        <View style={{ marginVertical: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 16,
              marginBottom: 6,
            }}
          >
            <Pressable
              style={[
                styles.postsNav,
                { borderColor: active === "posts" ? text : accentText },
              ]}
              onPress={() => setActive("posts")}
            >
              <Ionicons
                name="grid-outline"
                size={24}
                color={active === "posts" ? text : accentText}
                style={{
                  textAlign: "center",
                  paddingVertical: 6,
                }}
              />
            </Pressable>
            <Pressable
              style={[
                styles.postsNav,
                { borderColor: active === "videos" ? text : accentText },
              ]}
              onPress={() => setActive("videos")}
            >
              <Ionicons
                name="videocam-outline"
                size={24}
                color={active === "videos" ? text : accentText}
                style={{ textAlign: "center" }}
              />
            </Pressable>
            <Pressable
              style={[
                styles.postsNav,
                { borderColor: active === "tags" ? text : accentText },
              ]}
              onPress={() => setActive("tags")}
            >
              <MaterialCommunityIcons
                name="clipboard-account-outline"
                size={24}
                color={active === "tags" ? text : accentText}
                style={{ textAlign: "center" }}
              />
            </Pressable>
          </View>
          <FlatList
            data={User.postsUrl}
            numColumns={3}
            contentContainerStyle={{
              gap: 4,
            }}
            columnWrapperStyle={{
              gap: 4,
            }}
            scrollEnabled={false}
            renderItem={({ item }) => <UserPosts item={item} />}
          />
        </View>
      </ScrollView>
      {/* POSTS */}
      {/* MENU CONTAINER */}
    </SafeAreaView>
  );
};

const UserPosts = ({ item }: { item: string }) => {
  return (
    <TouchableOpacity style={{ flex: 1, aspectRatio: 1 }}>
      <Image
        source={{ uri: item }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </TouchableOpacity>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  infoContainer: {
    marginTop: 24,
    marginBottom: 6,
    gap: 24,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoDataContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  userImageContainer: {
    height: 90,
    width: 90,
    marginBottom: 8,
    backgroundColor: "#E3256B",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  infoValueText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userImage: {
    position: "absolute",
    height: 85,
    width: 85,
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
  },
  dataContainer: {
    alignItems: "center",
  },
  threads: {
    backgroundColor: "#333",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 2,
  },
  bio: {
    color: "white",
    maxWidth: 250,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 6,
    marginVertical: 16,
    gap: 6,
  },
  buttonText: {
    backgroundColor: "#222",
    flex: 1,
    borderRadius: 8,
    paddingVertical: 6,
  },
  addButton: {
    backgroundColor: "#222",
    paddingHorizontal: 6,
    borderRadius: 8,
    paddingVertical: 6,
  },
  highlightContainer: {
    flexDirection: "row",
    gap: 24,
    marginTop: 8,
    marginBottom: 16,
  },
  postsNav: {
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: "white",
  },
});
