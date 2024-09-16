import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Marker, Callout } from 'react-native-maps';



export default function Mapping({ciudad, setModalVisibleMapas, navigation}) {

  const [latitudCiudad, setLatitud] = useState()
  const [longitudCiudad, setLongitud] = useState()
  const [temp, setTemp] = useState()
  const [descripcion, setDescripcion] = useState()
  
  
  useEffect(() => {
  
  const latAndLongCiudad = async () => {

    const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&units=metric&appid=${appikey}`;

    
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const resultado_weather = await resultado.weather;

        setLatitud(resultado.coord.lat);
        setLongitud(resultado.coord.lon)
        setTemp(resultado.main.temp)       
        setDescripcion(resultado.weather[0].description.trim())
        
        
        
        

    }
    catch (error){
        Alert.alert(
        'Oops',
        'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
        [{text: 'Ok'}]
        )
    }

    setModalVisibleMapas(false)
}; 
latAndLongCiudad()

}, [])



  return (
    <View style={styles.container}>


      {descripcion ? 

<>
      <MapView 
        style={styles.map}
        initialRegion={
            {latitude: latitudCiudad,
            longitude: longitudCiudad,
        latitudeDelta: 23,
        longitudeDelta: 23}
        }
       >    
       
      

      { <Marker
       coordinate={{ latitude: latitudCiudad, longitude: longitudCiudad}}               
        > 
        
        <Callout tooltip={true} visible={true}>

          <View style={styles.callout}>

              <Text style ={styles.actual}> {Math.round(temp)}º </Text>

             
              <View style={styles.text}>
                
                <Text style={styles.ciudad}>{ciudad}</Text>

                <Text style ={styles.descripcion}>{descripcion} </Text>

              </View>
 
            </View>

        </Callout>

        </Marker>}

       </MapView>



      </>

      :

      setModalVisibleMapas(true)
      } 
    </View>

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  callout:{
    height: 55,
    flexDirection: 'row',
    
    justifyContent: 'center',
    alignItems: 'center',
   
    borderRadius: 10,
    marginBottom: 10,
    
backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },

  actual:{
    height: '100%',
    fontSize: 20,
    backgroundColor: '#F0A500',
    padding: 5,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10, 
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center'
  },

  text:{
    height: '100%',
    textAlign: 'left',
    textAlignVertical: 'center',
    justifyContent: 'center',
    
    paddingLeft: 5,
    marginRight: 20,

  },

  ciudad:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0, 
    textAlignVertical: 'center',
   
  }, 

  descripcion:{
    marginTop: 0,
  fontStyle: 'italic',
  textAlign: 'left',
  
  
}

})
