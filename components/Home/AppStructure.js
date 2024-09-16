import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';



const AppStructure = ({ navigation }) =>{

    const fede = 'ciudades'

    return(

        <View style={styles.view}>
        
            <View style={styles.bienvenida}>
            
                <Text style={styles.bienvenida_uno}>

                    Hola Carlos Leguizamo!

                </Text>

                <Text style={styles.bienvenida_dos}>

                    Bienvenida a tu aplicación para conocer el clima

                </Text>



            </View>

   


            <View style = {styles.card}>

                <Text style={styles.text}>
                Podes guardar un listado de las ciudades que quieras para conocer su temperatura y clima actual.
                {'\n\n'}
                También podrás verlas en un mapa.          
                </Text>

                <Button 
                
                title='ir a ciudades'
                containerStyle={{width: 150}}
                buttonStyle = {{backgroundColor: "lightgrey", borderWidth: 1,  borderColor: "#F0A500" }}
                titleStyle= {{color: "#F0A500"}}
                onPress = {() => navigation.navigate('ciudades')}
                />

            </View>


            <View style = {styles.card}>


                <Text style={styles.text}>
                Además, de cada una de las ciudades listadas se puede acceder a un detalle de las condiciones climáticas actuales y el pronóstico extendido a una semana.
                </Text>

                <Button 
                
                title='ir a clima'
                containerStyle={{width: 150}}
                buttonStyle = {{backgroundColor: "lightgrey", borderWidth: 1,  borderColor: "#F0A500" }}
                titleStyle= {{color: "#F0A500"}}
                
                onPress = {() => navigation.navigate('climate')}
                />

            </View>

        

        </View>
        
    )
};

export default AppStructure;

const styles = StyleSheet.create({


    view:{
        flex: 1,
        
        alignItems: 'center',
       
        marginTop: 0,
      
      },

    bienvenida:{
        width: '90%',
        marginVertical: 20,
    
    },

    bienvenida_uno:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    bienvenida_dos:{
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center'
    },

    card:{
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#F0A500',
        borderWidth: 0.5,
        backgroundColor: 'lightgrey',
        
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 10,
        
        paddingHorizontal: 10,
        paddingVertical: 12,

        marginVertical: 20,
  
    },


    text:{
        textAlign: 'center',
        paddingHorizontal: 10,
        letterSpacing: 1.05,
        marginBottom: 20,
        color: 'rgba(0,0,0, 0.6)',
        lineHeight: 20
     
    },

    button:{
        marginVertical: 15,
               
    }

})