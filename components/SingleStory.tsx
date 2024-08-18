import { useTheme } from "@/utils/ThemeContext";
import { router } from "expo-router";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface StoryType {
  active?: boolean;
  imageUrl: string;
  size: number;
  text?: string;
}
const SingleStory = ({ active = true, imageUrl, size, text }: StoryType) => {
  const { theme } = useTheme();
  const { background, accent } = theme.colors;
  const color = active ? "#E3256B" : accent;
  return (
    <TouchableOpacity onPress={() => router.push("/StoryDetail")}>
      <View
        style={{
          height: size + 5,
          width: size + 5,
          marginBottom: 8,
          backgroundColor: color,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{
            position: "absolute",
            height: size,
            width: size,
            borderRadius: 100,
            objectFit: "cover",
            borderWidth: 3,
            borderColor: background,
          }}
        />
      </View>
      {text && (
        <Text style={{ color: text, fontSize: 12, textAlign: "center" }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default SingleStory;
