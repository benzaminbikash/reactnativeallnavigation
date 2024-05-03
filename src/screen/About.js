import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("detailsub")}
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
        <Text style={{ color: "white" }}>Go to Detail sub Page.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
