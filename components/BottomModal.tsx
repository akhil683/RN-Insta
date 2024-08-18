import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@/utils/ThemeContext";

const BottomModal = () => {
  const { theme } = useTheme();
  const { text } = theme.colors;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 16,
        }}
      >
        <TouchableOpacity>
          <Feather
            name="bookmark"
            size={24}
            color={text}
            style={[styles.mainIcon, { borderColor: text }]}
          />
          <Text
            style={[
              styles.mainText,
              { marginTop: 6, fontSize: 14, color: text },
            ]}
          >
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6
            name="retweet"
            size={24}
            color={text}
            style={styles.mainIcon}
          />
          <Text
            style={[
              styles.mainText,
              { marginTop: 6, fontSize: 14, color: text },
            ]}
          >
            Remix
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={24}
            color={text}
            style={styles.mainIcon}
          />
          <Text
            style={[
              styles.mainText,
              { marginTop: 6, color: text, fontSize: 14 },
            ]}
          >
            QR Code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 24, marginTop: 24, marginHorizontal: 16 }}>
        <Pressable style={styles.pressable}>
          <AntDesign name="infocirlceo" size={28} color={text} />
          <Text style={[styles.mainText, { color: text }]}>
            Why you're seeing this post
          </Text>
        </Pressable>

        <Pressable style={styles.pressable}>
          <MaterialIcons name="visibility-off" size={28} color={text} />
          <Text style={[styles.mainText, { color: text }]}>Not interested</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={28}
            color={text}
          />
          <Text style={[styles.mainText, { color: text }]}>
            About this account
          </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Octicons name="report" size={28} color="red" />
          <Text style={[styles.mainText, { color: "red" }]}>Report</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Ionicons name="git-network-outline" size={28} color={text} />
          <Text style={[styles.mainText, { color: text }]}>
            Manage content preferences
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomModal;
const styles = StyleSheet.create({
  mainIcon: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 100,
  },
  mainText: {
    textAlign: "center",
    fontSize: 16,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
