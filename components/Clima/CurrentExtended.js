import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
  

const CurrentExtended = ({
    max, 
    min, 
    wind, 
    humidity, 
    sunrise, 
    sunset}) =>{

        const obtenerHora = (n) => {
        
        const d = new Date(n*1000)

        const hour = d.getHours();
        const minutes = `${("0"+d.getMinutes()).slice(-2)}`


        return (`${hour}:${minutes}`)
      
    }


    return(
        <View style={styles.view}>
            <View style={styles.sides}>
                <Text style = {styles.ext}>máxima: {Math.round(max)}º</Text>
                <Text style = {styles.ext}>viento: {Math.round(wind)} km/h</Text>
                <Text style = {styles.ext}>sale el sol: {obtenerHora(sunrise)}</Text>
            </View>

            <View style={styles.sides}>
               
                <Text style = {styles.ext}>mínima: {Math.round(min)}º</Text>
                <Text style = {styles.ext}>humedad: {humidity}%</Text>
                <Text style = {styles.ext}>pone el sol: {obtenerHora(sunset)}</Text>      
            </View>
        </View>
    )




};

export default CurrentExtended;


const styles = StyleSheet.create({

 

  view:{
    flexDirection: 'row',
   
    width: '90%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 30,
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

  },

 sides:{
     width: '50%',
     justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingVertical: 20,
 },

ext:{ 
    fontSize: 16,
    marginTop: 0,
    marginVertical:10,
    textAlign: 'center'
},

})