import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "./screen/Home";
import About from "./screen/About";
import Setting from "./screen/Setting";
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./screen/Detial";
import DetailSub from "./screen/DetailSub";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Chat from "./screen/TabsB/Chat";
import Contact from "./screen/TabsB/Contact";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
// import CustomDrawer from "./screen/Login";
import CustomDrawer from "./compoenents/CustomDrawer";

const bottom = createBottomTabNavigator();
const stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

// tab:
function TabBar() {
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
        name="home12"
        component={Home}
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
                <Entypo name="home" color={focused ? "red" : "black"} />
                <Text style={{ color: focused ? "red" : "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="contact" component={Contact} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  const navigation = useNavigation();
  return (
    <stack.Navigator>
      <stack.Screen
        name="main"
        component={BOTTOMTab}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                source={{
                  uri: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
                }}
                width={35}
                height={35}
                style={{ borderRadius: 50, marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
          title: "React Native",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
          headerRight: () => {
            return <Button title="Logout" color="black" />;
          },
        }}
      />
      <stack.Screen name="detail" component={Detail} />
      <stack.Screen name="detailsub" component={DetailSub} />
    </stack.Navigator>
  );
}

function BOTTOMTab() {
  return (
    <bottom.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "home1") {
            iconName = "home";
            color = focused ? "red" : "gray";
          }
          // else if (route.name == "about") {
          //   iconName = "user";
          //   color = focused ? "red" : "gray";
          // }
          else if (route.name == "setting") {
            iconName = "bell";
            color = focused ? "red" : "gray";
          }
          return <Entypo name={iconName} size={22} color={color} />;
        },
      })}
    >
      <bottom.Screen name="home1" component={TabBar} />
      <bottom.Screen
        name="about"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "red" : "gray",
                  marginBottom: 15,
                  padding: 10,
                  borderRadius: 50,
                  width: 60,
                  height: 60,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "black",
                  elevation: 10,
                }}
              >
                <Entypo name="user" size={22} color="white" />
                <Text style={{ color: "white" }}>Hello</Text>
              </View>
            );
          },
        }}
      />
      <bottom.Screen name="setting" component={Setting} />
    </bottom.Navigator>
  );
}

// function DrawerFun() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       drawerContent={() => {
//         return (
//           <ScrollView>
//             <View
//               style={{
//                 backgroundColor: "red",
//                 width: 300,
//                 height: 300,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Image
//                 source={{
//                   uri: "https://i.pinimg.com/564x/4c/84/7a/4c847abdc5bd3428e658c9ece7f1e5ee.jpg",
//                 }}
//                 style={{
//                   width: 150,
//                   height: 150,
//                   borderRadius: 150,
//                   marginTop: 10,
//                 }}
//               />
//               <Text
//                 style={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: 15,
//                   marginTop: 10,
//                 }}
//               >
//                 Ellyse Perry
//               </Text>
//               <Text
//                 style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//               >
//                 ellyseperry@gmail.com
//               </Text>
//             </View>
//             <View>
//               <TouchableOpacity
//                 style={{
//                   height: 40,
//                   backgroundColor: "blue",
//                   margin: 5,
//                   display: "flex",
//                   justifyContent: "center",
//                   paddingLeft: 10,
//                 }}
//               >
//                 <Text
//                   style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//                 >
//                   Home
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   height: 40,
//                   backgroundColor: "blue",
//                   margin: 5,
//                   display: "flex",
//                   justifyContent: "center",
//                   paddingLeft: 10,
//                 }}
//               >
//                 <Text
//                   style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//                 >
//                   Home
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   height: 40,
//                   backgroundColor: "blue",
//                   margin: 5,
//                   display: "flex",
//                   justifyContent: "center",
//                   paddingLeft: 10,
//                 }}
//               >
//                 <Text
//                   style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//                 >
//                   Home
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         );
//       }}
//     >
//       <Drawer.Screen name="home" component={HomeStack} />
//       <Drawer.Screen name="detail" component={Detail} />
//     </Drawer.Navigator>
//   );
// }

function DrawerFun({ route }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} route={route} />}
    >
      <Drawer.Screen name="home" component={HomeStack} />
      <Drawer.Screen name="detail" component={Detail} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <DrawerFun />
    </NavigationContainer>
  );
}

export default AppNavigator;
