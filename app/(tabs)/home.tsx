import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Story from "@/components/home/Story";
import PostContainer from "@/components/home/Posts";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";

const HomePage = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <HomeNav />
          <Story />
          <PostContainer />
          <View
            style={{
              marginHorizontal: 12,
              alignItems: "center",
              flexDirection: "row",
              gap: 12,
              marginVertical: 20,
            }}
          >
            <FontAwesome5 name="check-circle" size={32} color="green" />
            <Text
              style={{
                flex: 1,
                color: "#B4B4B4",
                lineHeight: 20,
              }}
            >
              You've seen all new posts from the past 3 days from accounts you
              follow.
            </Text>
          </View>
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
        <Link href={"/"}>
          <Feather name="heart" size={24} color="white" />
        </Link>
        <Link href={"/"}>
          <AntDesign name="message1" size={24} color="white" />
        </Link>
      </View>
    </View>
  );
};
