import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.push("detail")}
        style={{
          backgroundColor: "red",
          width: 200,
          height: 40,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Go to Detail Page.</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Search Here...."
        style={{
          width: 200,
          height: 30,
          borderWidth: 1,
          padding: 2,
          borderRadius: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default Home;
