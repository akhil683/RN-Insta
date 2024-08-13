import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView>
        <Text style={{ color: "white" }}>ProfilePage</Text>
      </SafeAreaView>
    </View>
  );
};

export default ProfilePage;
