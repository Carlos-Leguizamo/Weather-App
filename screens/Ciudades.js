import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from '../components/Ciudades/Form';
import ListadoCiudades from '../components/Ciudades/ListadoCiudades';
import Loading from '../components/Ciudades/LoadingCiudades';



const Ciudades = ({navigation}) =>{

  const [ciudadInput, setCiudadInput] = useState("");
  const [checkInput, setCheckInput] = useState(false);
  const [listadoCiudades, setListadoCiudades] = useState([]);

  const [modalVisibleCiudades, setModalVisibleCiudades] = useState(true);
  const [modalAccion, setModalAccion] = useState();
 
  

  useEffect(() => {

    const obtenerCiudadesStorage = async() =>{
   
      try {
        const ciudadesStorage = await AsyncStorage.getItem('ciudades');
        if (ciudadesStorage){
        setListadoCiudades(JSON.parse(ciudadesStorage))
        setModalVisibleCiudades(true)
        setModalAccion('Cargando los datos de tus')
        setCiudadInput('Ciudades listadas')
        }
      } catch (error) {

        console.log(error)
        
      }
    }
 
    obtenerCiudadesStorage();
     
  }, []);


  const almacenarCiudades = async (ciudadJSON) =>{
    try {
      await AsyncStorage.setItem('ciudades', ciudadJSON);
    } catch (error) {
      console.log(error)       
    };
    
}



  return (    

      <View style = {styles.app}>

       <StatusBar barStyle = "light-content" backgroundColor='#F0A500' />
       
        <View style = {styles.viewForm}>

           <Form 
           style={styles.form}
           ciudadInput = {ciudadInput} 
           setCiudadInput = {setCiudadInput}
           listadoCiudades = {listadoCiudades}
           setListadoCiudades = {setListadoCiudades}
           checkInput = {checkInput}
           setCheckInput = {setCheckInput}
           almacenarCiudades = {almacenarCiudades}
           setModalVisibleCiudades={setModalVisibleCiudades}
           setModalAccion={setModalAccion}
           />
        </View>


        <ListadoCiudades 
        listadoCiudades = {listadoCiudades}
        setListadoCiudades = {setListadoCiudades}
        almacenarCiudades = {almacenarCiudades}
        setModalVisibleCiudades={setModalVisibleCiudades}
        setCiudadInput={setCiudadInput}
        setModalAccion={setModalAccion}
        navigation={navigation}
 
        style = {styles.listadoCiudades}
       />
  
      <Loading 
        modalVisibleCiudades={modalVisibleCiudades}
        setModalVisibleCiudades={setModalVisibleCiudades}
        ciudadInput={ciudadInput}
        modalAccion = {modalAccion}/>


      </View>  
  
  );
};

export default Ciudades;


const styles = StyleSheet.create({

  app:{
    flex: 1,
 
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(125, 125, 125, 0.1)',
  },

});

