import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Notification from "./pages/Notification";
import Chatting from "./pages/Chatting";
import User from "./pages/User";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Setting from "./pages/Setting";
import CustomDrawer from "./components/CustomDrawer";

const stack = createNativeStackNavigator();
const bottom = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 3,
          borderRadius: 5,
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="mainhome"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: focused ? "red" : "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="chat" component={Chatting} />
      <Tab.Screen name="user" component={User} />
    </Tab.Navigator>
  );
};

function HomeStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="home1" component={Home} />
      <stack.Screen name="notification" component={Notification} />
    </stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <bottom.Navigator options>
      <bottom.Screen
        name="home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <bottom.Screen name="profile" component={Profile} />
    </bottom.Navigator>
  );
}

// right
function DrawerFile() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
    >
      <Drawer.Screen name="maindrawer" component={BottomTabNavigator} />
      <Drawer.Screen name="settting" component={Setting} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="main"
          component={DrawerFile}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen name="profile" component={Profile} />
        <stack.Screen name="product" component={Product} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
