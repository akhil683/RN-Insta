import { PostType } from "@/constants/posts";
import { Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useRef, useState } from "react";
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
  pause,
  visibleVideoIndex,
}: {
  items: PostType;
  index: number;
  pause: boolean;
  visibleVideoIndex: number | null;
}) => {
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const isPlaying = status?.isLoaded && status.isPlaying;

  const { width } = useWindowDimensions();
  const [mute, setMute] = useState(true);
  const video = useRef<Video>(null);

  useEffect(() => {
    if (!video.current) return;
    if (index !== visibleVideoIndex) {
      video.current.pauseAsync();
    }
    if (index === visibleVideoIndex) {
      video.current.playAsync();
    }
  }, [visibleVideoIndex]);

  const playHandler = () => {
    if (!video.current) {
      return;
    }
    if (isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  console.log(index + " " + visibleVideoIndex + "hi");

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
        onPress={playHandler}
        style={(styles.VideoContainer, { width: width, aspectRatio: 3 / 5 })}
      >
        {}
        <Video
          ref={video}
          source={{
            uri: items.video,
          }}
          volume={1.0}
          isMuted={mute}
          shouldPlay={pause}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={setStatus}
          isLooping
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        {!isPlaying && (
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="play"
              size={54}
              color="rgba(255,255,255,0.7)"
              style={{
                alignSelf: "center",
              }}
            />
          </View>
        )}
        <Pressable
          onPress={() => setMute(!mute)}
          onPressOut={(e) => e.stopPropagation()}
          hitSlop={20}
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
        </Pressable>
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
