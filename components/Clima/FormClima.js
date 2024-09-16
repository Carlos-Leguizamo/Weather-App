import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FormClima = ({ciudadClimaInput, setCiudadClimaInput, listadoClimaCiudades, setCiudad, setTrigger, setLatitudCiudad, setLongitudCiudad, setModalVisible, setSelectValue, selectValue, setReload, reload
}) => {


 // Crear y agregar ciudades

 const latAndLongCiudad = async () => {

        const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadClimaInput}&lang=es&appid=${appikey}`;

        
        
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setLatitudCiudad(resultado.coord.lat);
            setLongitudCiudad(resultado.coord.lon)
            setCiudad(resultado.name)
        }
        catch (error){
            Alert.alert(
            'Oops',
            'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
            [{text: 'Ok'}]
            )
        }

       setTrigger(true)
    };  
    
    
 
const saveCiudad = (ciudad) =>{
    setCiudadClimaInput(ciudad)
    setSelectValue(ciudad)   
    };
     

      
const btnAction = () =>{
    latAndLongCiudad();
    Keyboard.dismiss();
    setModalVisible(true)

};


const reloadPickerList = () =>{
    setReload(!reload)
    
    };

    return(

        <View style = {styles.view}>

                <View style={styles.form}>

                    <View style = {styles.input}>

                   
                        <Picker
                            selectedValue={ selectValue}
                            onValueChange={ ciudad => (saveCiudad(ciudad)) }
                            style={{ height: 60 }}
                            dropdownIconColor={'#fff'}
                            dropdowniconripplecolor={'#fff'}
                            onFocus={() => reloadPickerList()}
                                           
                        >
                

                        <Picker.Item  label="Que ciudad deseas ver?" value="" style={{color: 'rgb(125, 125, 125)', width: '100%', fontSize: 18 }}/> 
                        {listadoClimaCiudades.map( cripto => (
                            
                            <Picker.Item key={cripto} label={cripto} value={cripto}  style={{ fontSize: 18 }}/> 
                            

                        ))}


                        </Picker>
                      
                                         
                    </View>
                
                
                    <View style={styles.viewbtn}>
                        <TouchableHighlight
                            style={styles.btnAgregar}
                            onPress={ () => btnAction() }
                        >
                            <Text style={styles.textoBoton}>ir</Text>
                        </TouchableHighlight>
                    </View>


                </View>
               
        </View>
 
    )

};

export default FormClima;

const styles = StyleSheet.create({

    reload:{
       backgroundColor: 'black',
        width: 250,

        height: 60,
        position: 'absolute' 
    },

    view:{

     width: "100%",
     height: 80,
     marginTop: 0,
     
     justifyContent: 'center',
     textAlign: 'center',
     alignItems: 'center',
     height:100,

    }, 

    form:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: '90%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
   
    },

    input:{
        height: 60,
        backgroundColor: "#fff",

        paddingHorizontal:5,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
       
        width:'85%',
        marginRight: 0,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
	    height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,



    }, 

    viewbtn:{
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
    },

    btnAgregar: {
       backgroundColor: '#C37B89',
       justifyContent: 'center',
       textAlignVertical: 'center',

        width: "100%",
       
       height: 60,
       borderTopRightRadius: 15,
       borderBottomRightRadius: 15,

       shadowColor: "#000",
       shadowOffset: {
       width: 0,
       height: 3,
       },
       shadowOpacity: 0.27,
       shadowRadius: 4.65,

       elevation: 10,
        
    },
    
    textoBoton: {
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }

})