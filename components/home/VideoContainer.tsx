import { PostType } from "@/constants/posts";
import { Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import {
  useWindowDimensions,
  Pressable,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const VideoContainer = ({
  items,
  index,
  visibleVideoIndex,
}: {
  items: PostType;
  index: number;
  visibleVideoIndex: number | null;
}) => {
  const { width } = useWindowDimensions();
  const [mute, setMute] = useState(true);

  return (
    <View>
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.userBox}>
          <Image
            source={{
              uri: items.user.avatar_url,
            }}
            width={32}
            height={32}
            style={{
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
          <Text style={{ color: "white" }}>{items.user.username}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "white",
              }}
            >
              Follow
            </Text>
          </TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>

      <Pressable
        onPress={() => setMute(!mute)}
        style={(styles.VideoContainer, { width: width, aspectRatio: 3 / 5 })}
      >
        {}
        <Video
          source={{
            uri: items.video,
          }}
          volume={1.0}
          isMuted={mute}
          shouldPlay
          resizeMode={ResizeMode.COVER}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <View
          style={{
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            bottom: 12,
            right: 12,
            borderRadius: 100,
          }}
        >
          {mute ? (
            <Ionicons name="volume-mute" size={20} color="white" />
          ) : (
            <Ionicons name="volume-high-outline" size={20} color="white" />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default VideoContainer;
const styles = StyleSheet.create({
  userContainer: {
    position: "absolute",
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 6,
  },
  userBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
    flex: 1,
  },
  captionContainer: {
    paddingHorizontal: 12,
  },
  VideoContainer: {
    backgroundColor: "white",
    overflow: "hidden",
  },
});
