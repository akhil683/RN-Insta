import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "@/constants/User";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import SingleStory from "@/components/SingleStory";

const ProfilePage = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "black", flex: 1, paddingHorizontal: 12 }}
    >
      {/* MENU CONTAINER */}
      <View style={styles.navContainer}>
        <View style={styles.username}>
          <Text style={styles.usernameText}>{User.username}</Text>
          <AntDesign name="down" size={16} color="white" />
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <FontAwesome6 name="threads" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="plussquareo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* MENU CONTAINER */}

      {/* INFO CONTAINER */}
      <View style={styles.infoContainer}>
        <SingleStory size={85} imageUrl={User.avatar_url} />
        <View style={styles.infoDataContainer}>
          <View style={styles.dataContainer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {User.posts}
            </Text>
            <Text style={{ color: "white" }}>posts</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {User.followers}
            </Text>
            <Text style={{ color: "white" }}>followers</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {User.following}
            </Text>
            <Text style={{ color: "white" }}>following</Text>
          </View>
        </View>
      </View>
      {/* INFO CONTAINER */}
      {/* BIO CONTAINER */}
      <View style={{ marginHorizontal: 6 }}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={styles.threads}>{User.threadName}</Text>
        </TouchableOpacity>
        <Text style={styles.bio}>{User.bio}</Text>
      </View>
      {/* BIO CONTAINER */}

      {/* EDIT BUTTONS */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={{ color: "#e5e4db", textAlign: "center" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={{ color: "#e5e4db", textAlign: "center" }}>
            Share Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="person-add-outline" size={18} color="#e5e4db" />
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
          <Ionicons name="add-circle-outline" size={80} color="white" />
          <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
            New
          </Text>
        </TouchableOpacity>
      </View>
      {/* HIGHLIGHTS */}
      <View>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={styles.postsNav}>
            <Text style={{ color: "white", textAlign: "center" }}>one</Text>
          </Pressable>
          <Pressable style={styles.postsNav}>
            <Text style={{ color: "white", textAlign: "center" }}>Two</Text>
          </Pressable>
          <Pressable style={styles.postsNav}>
            <Text style={{ color: "white", textAlign: "center" }}>Three</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
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
    color: "white",
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
  userImage: {
    position: "absolute",
    height: 85,
    width: 85,
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
    borderColor: "black",
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
    marginBottom: 16,
  },
  postsNav: {
    flex: 1,
  },
});
