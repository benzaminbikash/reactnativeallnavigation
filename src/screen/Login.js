// <Drawer.Navigator
// drawerContent={(props) => {
//   return <CustomDrawer data={props} />;
// }}

import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
const CustomDrawer = ({ data }) => {
  const navigation = useNavigation();
  const [select, setSelect] = useState(null);
  console.log(select);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          height: 250,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
            setSelect(1);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: select == 1 ? "red" : "#fff",
            margin: 5,
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Entypo name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelect(2);
            navigation.navigate("about");
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: select == 2 ? "red" : "#fff",
            margin: 5,
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Entypo name="user" size={24} color="black" />
          <Text>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            // backgroundColor: "red",
            margin: 5,
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Entypo name="cog" size={24} color="black" />
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export default CustomDrawer;
