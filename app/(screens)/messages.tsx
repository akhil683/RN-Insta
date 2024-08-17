import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import User from "@/constants/User";
import messages, { MessageType } from "@/constants/Messsages";
import { router } from "expo-router";
import SingleStory from "@/components/SingleStory";

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.username}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.usernameText}>{User.username}</Text>
          <AntDesign name="down" size={16} color="white" />
        </View>
        <TouchableOpacity>
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TextInput
          style={styles.TextInput}
          placeholder="Ask Meta AI or Search"
          placeholderTextColor={"#999"}
        />
        <View style={{ marginHorizontal: 12, marginTop: 28 }}>
          <FlatList
            data={messages}
            horizontal
            contentContainerStyle={{
              gap: 16,
            }}
            renderItem={({ item }) => (
              <SingleStory
                imageUrl={item.image_url}
                size={80}
                text={item.name}
                active={false}
              />
            )}
          />
        </View>
        <View style={{ paddingHorizontal: 12, marginVertical: 28 }}>
          <View style={styles.messagesHeader}>
            <Text style={styles.messagesHeaderText}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.messagesHeaderText}>Requests</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={messages}
            renderItem={SingleMessage}
            scrollEnabled={false}
            contentContainerStyle={{
              gap: 28,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SingleMessage = ({ item }: { item: MessageType }) => {
  return (
    <TouchableOpacity style={styles.chatContainer}>
      <View style={styles.chatImageContainer}>
        <Image
          source={{ uri: item.image_url }}
          style={{ backgroundColor: "red", borderRadius: 100 }}
          width={50}
          height={50}
        />
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: "#999" }}>
            {item.message.length <= 35
              ? item.message
              : `${item.message.slice(0, 35)}...`}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="camera" size={24} color="gray" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  messagesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  messagesHeaderText: {
    color: "white",
    fontSize: 16,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  usernameText: {
    color: "white",
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
  },
  TextInput: {
    color: "white",
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: 12,
    fontSize: 16,
  },
  chatContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatImageContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
});
