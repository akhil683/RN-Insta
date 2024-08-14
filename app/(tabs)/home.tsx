import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Story from "@/components/home/Story";
import PostContainer from "@/components/home/PostContainer";

const HomePage = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <HomeNav />
          <Story />
          <PostContainer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const HomeNav = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 16,
        paddingVertical: 4,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/insta_logo.png")}
          style={{
            objectFit: "cover",
            height: 44,
            width: 120,
          }}
        />
        <AntDesign name="down" size={16} color="white" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Link href={"/Notifications"}>
          <Feather name="heart" size={24} color="white" />
        </Link>
        <Link href={"/messages"}>
          <AntDesign name="message1" size={24} color="white" />
        </Link>
      </View>
    </View>
  );
};
