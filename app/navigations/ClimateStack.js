import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clima from '../../screens/Climate';

const Stack = createStackNavigator();

export default function ClimateStack(){
    return(
        <Stack.Navigator 

        screenOptions={{
            headerStyle: {
              backgroundColor: '#6200ea', 
            },

            headerTintColor: 'white',

            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold"
            },
          }}>
              
            <Stack.Screen
                name="Climas"
                component={Clima}
                options={{title: "Clima"}}
            />
        </Stack.Navigator>
    );
} 