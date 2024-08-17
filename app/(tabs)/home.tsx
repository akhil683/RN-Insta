import { View, ScrollView } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Story from "@/components/home/Story";
import PostContainer from "@/components/home/PostContainer";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomModal from "@/components/BottomModal";
import HomeNav from "@/components/home/HomeNav";

const HomePage = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
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
          handleIndicatorStyle={{ backgroundColor: "gray" }}
          backgroundStyle={{ backgroundColor: "#111" }}
          snapPoints={["60%"]}
        >
          <BottomModal />
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;
