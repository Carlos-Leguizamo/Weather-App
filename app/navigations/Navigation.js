import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import ClimateStack from "./ClimateStack";
import AboutStack from "./AboutStack";

import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#F0A500",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Inicio" }}
        />

        <Tab.Screen
          name="ciudades"
          component={CiudadesStack}
          options={{ title: "Ciudades" }}
        />

        <Tab.Screen
          name="climate"
          component={ClimateStack}
          options={{ title: "Clima" }}
        />

        <Tab.Screen
          name="about"
          component={AboutStack}
          options={{ title: "Acerca de" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "home":
      iconName = "home-outline";
      break;
    case "ciudades":
      iconName = "playlist-edit";
      break;
    case "climate":
      iconName = "weather-cloudy";
      break;
    case "maps":
      iconName = "google-maps";
      break;
    case "about":
      iconName = "account-supervisor-outline";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={30} color={color} />
  );
}
