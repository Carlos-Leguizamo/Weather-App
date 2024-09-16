import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Icon } from 'react-native-elements';

const FormatoMuestraCiudades = ({ciudadMostrar, listadoCiudades, setListadoCiudades, almacenarCiudades, setModalVisibleCiudades, setModalAccion, setCiudadInput, navigation
}) =>{



const deleteCiti = ciudad =>{

    
    setModalVisibleCiudades(true)

    setModalAccion('Eliminando datos de')
    setCiudadInput(ciudadMostrar.name)

    const ciudadesFiltradas = listadoCiudades.filter(citi => citi !== ciudad);
    
    setListadoCiudades(ciudadesFiltradas);
    almacenarCiudades(JSON.stringify(ciudadesFiltradas));
   

}


    return(
        
    <View style = {styles.view} >
 
        <View style ={styles.conteiner}>
            
            <View style = {styles.delete}>
                <Icon
                name='delete-forever'
                type = "material-community"
                iconStyle = {{color:'grey', fontSize: 20}}
                onPress = {() => deleteCiti(ciudadMostrar.name)}
                
                />  
            </View> 
         

            <Text style = {styles.text}
            onPress = {() => navigation.navigate('mapas', ciudadMostrar.name)}
            >
                {ciudadMostrar.name}
                
            </Text>

            <Text style = {styles.temp}>
                {Math.round(ciudadMostrar.main.temp)}
                <Text>
                    &#x2103;
                </Text>
            </Text>

            <Image 
                style = {styles.image}
                source = {{uri:`http://openweathermap.org/img/w/${ciudadMostrar.weather[0].icon}.png`}}

            />

        </View>

    </View>
   
);

};

export default FormatoMuestraCiudades;

const styles = StyleSheet.create({

  

    view:{
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlignVertical: 'center',
        borderColor: '#F0A500',
        borderBottomWidth: 0.5,
        paddingVertical: 10,    
    },

    conteiner:{
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    delete:{  
        fontSize: 13, 
        backgroundColor:'rgba(125,125,125,0.1)',
        borderRadius: 100,
        width: '7.5%', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '55%', 
        textAlignVertical: 'center',
      
       },

    text:{
        color: "black",
        paddingHorizontal: 10,
        fontSize: 18,
        width: '52.50%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 
        textAlignVertical: 'center', 
    },

    temp:{
        paddingHorizontal: 10,
        fontSize: 18,
        color: "black",
        width: '20%', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        textAlignVertical: 'center',
    }, 

    image:{
        paddingHorizontal: 0,
        width: '20%',
        width: 50,
        height: 50,
      }

})