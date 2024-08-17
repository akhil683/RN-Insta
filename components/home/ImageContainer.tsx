import { PostType } from "@/constants/posts";
import { MutableRefObject } from "react";
import {
  useWindowDimensions,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const ImageContainer = ({
  items,
  onViewableItemsChanged,
  viewabilityConfig,
}: {
  items: PostType;
  onViewableItemsChanged: MutableRefObject<(item: any) => void>;
  viewabilityConfig: MutableRefObject<{ itemVisiblePercentThreshold: number }>;
}) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      data={items.images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      renderItem={({ item }: { item: string }) => (
        <View style={(styles.ImageContainer, { width: width, aspectRatio: 1 })}>
          {}
          <Image
            source={{
              uri: item,
            }}
            style={styles.image}
          />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  ImageContainer: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default ImageContainer;
