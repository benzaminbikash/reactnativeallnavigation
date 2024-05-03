import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

const CustomDrawer = (props, route) => {
  console.log(route);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: "red",
            width: 300,
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/4c/84/7a/4c847abdc5bd3428e658c9ece7f1e5ee.jpg",
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Ellyse Perry
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            ellyseperry@gmail.com
          </Text>
        </View>
        {/* use this one which is default
        <DrawerItemList {...props} /> */}
        {/* or custom this one */}
        <View>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "blue",
              margin: 5,
              display: "flex",
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "blue",
              margin: 5,
              display: "flex",
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "blue",
              margin: 5,
              display: "flex",
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
