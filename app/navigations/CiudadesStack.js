import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ciudades from '../../screens/Ciudades';
import FormatoMuestraCiudades from '../../components/Ciudades/FormatoMuestraCiudades';
import Maps from '../../screens/Maps';

const Stack = createStackNavigator();

export default function CiudadesStack(){
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
                name="Ciudad" 
                component={Ciudades}
                options={{title: "Ciudades"}}
            />


            <Stack.Screen
                name="mapas"
                component={Maps}
                options={{title: "Mapa"}}
            />



        </Stack.Navigator>
    );
} 