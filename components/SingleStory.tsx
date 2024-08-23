import { useTheme } from "@/utils/ThemeContext";
import { router } from "expo-router";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

interface StoryType {
  active?: boolean;
  imageUrl: string;
  size: number;
  text?: string;
}
const SingleStory = ({ active = true, imageUrl, size, text }: StoryType) => {
  const { theme } = useTheme();
  const { background, accent } = theme.colors;
  const storyColor = active ? "#E3256B" : accent;

  return (
    <TouchableOpacity onPress={() => router.push("/StoryDetail")}>
      <View
        style={[
          styles.container,
          {
            height: size + 5,
            width: size + 5,
            backgroundColor: storyColor,
          },
        ]}
      >
        <Image
          source={{
            uri: imageUrl,
          }}
          style={[
            styles.image,
            { height: size, width: size, borderColor: background },
          ]}
        />
      </View>
      {text && <Text style={[styles.text, { color: text }]}>{text}</Text>}
    </TouchableOpacity>
  );
};
export default SingleStory;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
  image: {
    position: "absolute",
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
  },
});
