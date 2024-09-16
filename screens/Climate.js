import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormClima from '../components/Clima/FormClima';
import ObtenerClima from '../components/Clima/ObtenerClima';
import Loading from '../components/Clima/Loading';


const Climate = () =>{

  const [ciudadClimaInput, setCiudadClimaInput] = useState();
  const [trigger, setTrigger] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [listadoClimaCiudades, setListadoClimaCiudades] = useState([]);
  const [latitudCiudad, setLatitudCiudad] = useState();
  const [longitudCiudad, setLongitudCiudad] = useState();
  const [ciudad, setCiudad] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const [selectValue, setSelectValue] = useState("Que ciudad deseas ver?")

  const [reload, setReload] = useState(false)
 
  

  useEffect(() => {
    const obtenerCiudadesStorage = async() =>{
      try {
        const ciudadesStorage = await AsyncStorage.getItem('ciudades');
        if (ciudadesStorage){
        setListadoClimaCiudades(JSON.parse(ciudadesStorage).sort())
        }
      } catch (error) {

        console.log(error)
        
      }
    }
 
    obtenerCiudadesStorage();
     
  }, [reload]);




  return (

      <View style = {styles.app}>

       <StatusBar barStyle = "light-content" backgroundColor='#F0A500' />
     
        <View style = {styles.view}>

           <FormClima 
           style={styles.form}
           ciudadClimaInput = {ciudadClimaInput} 
           setCiudadClimaInput = {setCiudadClimaInput}
           listadoClimaCiudades = {listadoClimaCiudades}
           setListadoClimaCiudades = {setListadoClimaCiudades}
           
           setTrigger = {setTrigger}
           ciudad = {ciudad}
           setCiudad = {setCiudad}
           setShowScreen = {setShowScreen}
           
           setLatitudCiudad = {setLatitudCiudad}
           setLongitudCiudad ={setLongitudCiudad}

           setModalVisible = {setModalVisible}
           selectValue ={selectValue}
           setSelectValue={setSelectValue}
           setReload={setReload}
           reload={reload}

           
           />

          

        <ObtenerClima 
           
           latitudCiudad = {latitudCiudad}
           longitudCiudad ={longitudCiudad}
           trigger = {trigger}
           setTrigger = {setTrigger}
           ciudadClimaInput = {ciudadClimaInput}
           ciudad = {ciudad}
           showScreen = {showScreen}
           setShowScreen = {setShowScreen}
           setModalVisible = {setModalVisible}
           setSelectValue = {setSelectValue}
           
           />

        </View>


        <Loading 
        modalVisible={modalVisible}
        ciudadClimaInput = {ciudadClimaInput}/>

    
      </View>  


    
  );
};

export default Climate;

const styles = StyleSheet.create({

  app:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(125, 125, 125, 0.1)',
    marginTop: 0,
  },

  view:{
    width:"100%",
    
  }
 
});

