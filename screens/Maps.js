import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

import Mapping from "../components/Maps/Mapping";
import LoadingMapas from '../components/Maps/LoadingMapas';

export default function Maps({navigation, route}){

    

   const [modalVisibleMapas, setModalVisibleMapas] = useState(false);
   const [ciudad, setCiudad] = useState(route.params);

    return(
      <>
        <LoadingMapas
        modalVisibleMapas={modalVisibleMapas}
        setModalVisibleMapas={setModalVisibleMapas}
        ciudad={ciudad}
      
        />

        <Mapping 
        ciudad={ciudad}
        setModalVisibleMapas={setModalVisibleMapas}
        navigation = {navigation}
        />

   
        <Button
          onPress = {() => navigation.navigate('Ciudades')}
          title="Volver"
          color="#F0A500"
          containerStyle={styles.buttonContainer}
                buttonStyle = {styles.buttonPress}
        />

      </>
    );
};

const styles = StyleSheet.create({

    view:{
        width: "100%",
        marginBottom: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    buttonContainer: {
      position: 'absolute',
      width: 100, 
      
      bottom: 20,
      right: 20,


      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.50,
      shadowRadius: 1.6,

      elevation: 5,
      
    }, 

    buttonPress:{
      backgroundColor: "#F0A500",
      padding: 7,
      }
    
})