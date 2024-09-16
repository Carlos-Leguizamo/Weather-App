import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import FormatoMuestraCiudades from './FormatoMuestraCiudades';


const ListadoCiudades = ({listadoCiudades, setListadoCiudades, almacenarCiudades, refresh, setRefresh, setModalVisibleCiudades, setCiudadInput, setModalAccion, navigation}) =>{

    const [ciudadesData, setCiudadesData] = useState({});
    

    useEffect(() => {

        

      const mapLoop = async _ => {
           
          
            const promises = listadoCiudades.sort().map(async citi => {
                const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&units=metric&appid=${appikey}`;
               
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    return ( resultado )
                }
                catch (error){
                    Alert.alert(
                    'Oops',
                    'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
                    [{text: 'Ok'}]
                    )
                }
              
            })
          
            const ciudadesPromesas = await Promise.all(promises);
           setCiudadesData(ciudadesPromesas);
           setModalVisibleCiudades(false)
           setCiudadInput('');
        };
        mapLoop();     
      }, [listadoCiudades]);



    return(
        <View style = {styles.view}>

          {listadoCiudades.length > 0 ?
          <FlatList
          contentContainerStyle = {styles.flatList}
          data={ciudadesData}
          renderItem={({item}) => <FormatoMuestraCiudades 
                                   ciudadMostrar = {item}
                                   almacenarCiudades = {almacenarCiudades}
                                   listadoCiudades = {listadoCiudades}
                                   setListadoCiudades = {setListadoCiudades} 
                                   setRefresh = {setRefresh}
                                   refresh = {refresh}
                                   setModalVisibleCiudades={setModalVisibleCiudades}
                                   setModalAccion={setModalAccion}
                                   setCiudadInput = {setCiudadInput}
                                   navigation={navigation}
                                  
                                   />
                               }
                
    
          keyExtractor={ciudad => Math.random()}

          /> :
          
           <Text style={styles.emptyText}>
            Hola! {'\n\n'}
            Todavía no ingresaste ninguna ciudad, cuando lo hagas se mostará aquí</Text>
        
        }  

        </View>
    );
};

export default ListadoCiudades;

const styles = StyleSheet.create({

    view:{
        width: "100%",
        marginBottom: 110,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    
    flatList:{
        justifyContent: 'center',
        textAlignVertical: 'center', 
        width: '90%',
    },

    emptyText:{
        width: '85%',
        marginTop: 100,
        paddingVertical: 30,
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F0A500',
        textAlign: 'center',
        color: 'grey',
        fontSize: 15,
    }

})