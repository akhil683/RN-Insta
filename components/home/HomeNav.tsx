import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, TouchableOpacity, Image } from "react-native";

const HomeNav = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 16,
        paddingVertical: 4,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/insta_logo.png")}
          style={{
            objectFit: "cover",
            height: 44,
            width: 120,
          }}
        />
        <AntDesign name="down" size={16} color="white" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Link href={"/Notifications"}>
          <Feather name="heart" size={24} color="white" />
        </Link>
        <Link href={"/messages"}>
          <AntDesign name="message1" size={24} color="white" />
        </Link>
      </View>
    </View>
  );
};
export default HomeNav;
