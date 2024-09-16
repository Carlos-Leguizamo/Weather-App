import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../../screens/Home';


const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#F0A500', 
            },

            headerTintColor: 'white',

            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold"
            },
          }}>
              
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: "Inicio"}}
            />
        </Stack.Navigator>
    );
} 