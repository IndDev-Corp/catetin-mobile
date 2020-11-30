import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import BerandaScreen from "./screens/BerandaScreen";
import KategoriScreen from "./screens/KategoriScreen";
import LainnyaScreen from "./screens/LainnyaScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "BerandaScreen") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "LainnyaScreen") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "KategoriScreen") {
              iconName = focused ? "cubes" : "cubes";
              return <FontAwesome name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={"home"} color={color} size={size} />
            ),
          }}
          name="BerandaScreen"
          component={BerandaScreen}
        />
        <Tab.Screen name="LainnyaScreen" component={LainnyaScreen} />
        <Tab.Screen name="KategoriScreen" component={KategoriScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
