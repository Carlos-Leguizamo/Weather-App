import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
 

const Current = ({temp, 
    sensacion,
    icono, 
    condicion, date, ciudad}) =>{

        const obtenerFecha = (n) => {
        
        const d = new Date(n*1000)

        const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
        const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
       
        const dayName = weekDays[(d.getDay())]; 
        const dayNumber = d.getDate();
        const month = months[d.getMonth()];

        return (`${dayName}, ${dayNumber} de ${month}`)
      
    }


    return(
        <View style ={styles.nombre}>
            <Text style = {styles.ciudad}>  {ciudad.trim()}</Text>
            <Text style = {styles.fecha}>  {obtenerFecha(date)}</Text>


        <View style = {styles.view}>
            
            <View style = {styles.leftView}>
            <Text style = {styles.temp}> {Math.round(temp)}º</Text>
            <Text style = {styles.sensacion}> sensación térmica {Math.round(sensacion)}º </Text>
            <Text style = {styles.sensacion}> {condicion} </Text>
            </View>

            <View style = {styles.rightView}>

            
            <View style = {styles.icono}>
            <Image 
            style = {styles.image}
            source = {{uri:`http://openweathermap.org/img/w/${icono}.png`}}/>
            </View>
            
            </View>
        </View>
        </View>
    )




};

export default Current;


const styles = StyleSheet.create({

    nombre:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width:'90%'
    },

    ciudad:{
        textAlign: 'center',
        padding: 0,
        fontSize: 22,
        width:'100%',
        fontWeight: 'bold',
        marginBottom: 0,
        paddingRight: 7.5
    },

    fecha:{
   
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20, 
        width:'100%',
        paddingRight: 7.5
    },

  view:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },

  leftView:{
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

  },

  rightView:{
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

  },

  temp:{
    fontWeight: 'bold',
    fontSize: 55,
    marginBottom: 0,
    padding: 0
},

sensacion:{
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 0,
},
icono: {
    borderRadius: 100,
    height: 125,
    width: 125,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

    borderColor: '#F0A500',
    borderWidth: 0.5,
    backgroundColor: 'lightgrey',

},
    image:{
        width: 110,
        height: 100,
    }

})