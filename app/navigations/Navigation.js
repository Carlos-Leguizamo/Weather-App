import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import ClimateStack from "./ClimateStack";
import AboutStack from "./AboutStack";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarInactiveTintColor: "#646464",
          tabBarActiveTintColor: "#6200ea",
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Ciudades"
          component={CiudadesStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Clima"
          component={ClimateStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Nosotros"
          component={AboutStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "Inicio":
      iconName = "home-outline";
      break;
    case "Ciudades":
      iconName = "playlist-edit";
      break;
    case "Clima":
      iconName = "weather-cloudy";
      break;
    case "maps":
      iconName = "google-maps";
      break;
    case "Nosotros":
      iconName = "account-supervisor-outline";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={30} color={color} />
  );
}
