import { View, ScrollView } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Story from "@/components/home/Story";
import PostContainer from "@/components/home/PostContainer";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomModal from "@/components/BottomModal";
import HomeNav from "@/components/home/HomeNav";
import { useTheme } from "@/utils/ThemeContext";

const HomePage = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ backgroundColor: background, flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <HomeNav />
          <Story />
          <PostContainer handleOpenPress={handleOpenPress} />
        </ScrollView>
        <BottomSheet
          enablePanDownToClose={true}
          index={-1}
          ref={bottomSheetRef}
          handleIndicatorStyle={{ backgroundColor: accentText }}
          backgroundStyle={{ backgroundColor: background }}
          snapPoints={["60%"]}
        >
          <BottomModal />
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;
