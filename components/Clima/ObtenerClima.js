import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, Alert} from 'react-native';
import Current from './Current';    
import CurrentExtended from './CurrentExtended';


const ObtenerClima = ( {latitudCiudad, longitudCiudad, trigger, setTrigger, ciudadClimaInput, ciudad, showScreen, setShowScreen, setModalVisible, setSelectValue} ) => {

    

    const obtenerFecha = (n) => {
        
        const d = new Date(n*1000)

        const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
       
       
        const dayName = weekDays[(d.getDay())]; 
        const dayNumber = d.getDate();
        

        return (`${dayName} ${dayNumber}`)
      
    }

    
    const [temp, setTemp] = useState();
    const [sensacion, setSensacion] = useState();
    const [icono, setIcono] = useState();
    const [condicion, setCondicion] = useState();
    const [date, setDate] = useState();

    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();

    const [uno, setUno] = useState();
    const [unoTempMax, setUnoTempMax] = useState();
    const [unoTempMin, setUnoTempMin] = useState();
    const [unoWeather, setUnoWeather] = useState();

    const [dos, setDos] = useState();
    const [dosTempMax, setDosTempMax] = useState();
    const [dosTempMin, setDosTempMin] = useState();
    const [dosWeather, setDosWeather] = useState();

    const [tres, setTres] = useState();
    const [tresTempMax, setTresTempMax] = useState();
    const [tresTempMin, setTresTempMin] = useState();
    const [tresWeather, setTresWeather] = useState();

    const [cuatro, setCuatro] = useState();
    const [cuatroTempMax, setCuatroTempMax] = useState();
    const [cuatroTempMin, setCuatroTempMin] = useState();
    const [cuatroWeather, setCuatroWeather] = useState();

    const [cinco, setCinco] = useState();
    const [cincoTempMax, setCincoTempMax] = useState();
    const [cincoTempMin, setCincoTempMin] = useState();
    const [cincoWeather, setCincoWeather] = useState();

    const [seis, setSeis] = useState();
    const [seisTempMax, setSeisTempMax] = useState();
    const [seisTempMin, setSeisTempMin] = useState();
    const [seisWeather, setSeisWeather] = useState();

    const [siete, setSiete] = useState();
    const [sieteTempMax, setSieteTempMax] = useState();
    const [sieteTempMin, setSieteTempMin] = useState();
    const [sieteWeather, setSieteWeather] = useState();

    
    
    useEffect(() => {
    const crearCiudad = async () => {
        
        
        if (latitudCiudad){

            
            
    const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudCiudad}&lon=${longitudCiudad}&units=metric&lang=es&appid=${appikey}`;
    
    
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
           
    
            

            setTemp(resultado.current.temp)
            setSensacion(resultado.current.feels_like)
            setCondicion(resultado.current.weather[0].description)
            setIcono(resultado.current.weather[0].icon)
            setDate(resultado.current.dt)

            setMax(resultado.daily[0].temp.max);
            setMin(resultado.daily[0].temp.min);
            setWind(resultado.current.wind_speed);
            setHumidity(resultado.current.humidity);
            setSunrise(resultado.current.sunrise);
            setSunset(resultado.current.sunset);
                
            setUno(resultado.daily[1].dt);
            setUnoTempMax(resultado.daily[1].temp.max);
            setUnoTempMin(resultado.daily[1].temp.min);
            setUnoWeather(resultado.daily[1].weather[0].description);

            
            setDos(resultado.daily[2].dt);
            setDosTempMax(resultado.daily[2].temp.max);
            setDosTempMin(resultado.daily[2].temp.min);
            setDosWeather(resultado.daily[2].weather[0].description);


            setTres(resultado.daily[3].dt);
            setTresTempMax(resultado.daily[3].temp.max);
            setTresTempMin(resultado.daily[3].temp.min);
            setTresWeather(resultado.daily[3].weather[0].description);


            setCuatro(resultado.daily[4].dt);
            setCuatroTempMax(resultado.daily[4].temp.max);
            setCuatroTempMin(resultado.daily[4].temp.min);
            setCuatroWeather(resultado.daily[4].weather[0].description);


            setCinco(resultado.daily[5].dt);
            setCincoTempMax(resultado.daily[5].temp.max);
            setCincoTempMin(resultado.daily[5].temp.min);
            setCincoWeather(resultado.daily[5].weather[0].description);

            setSeis(resultado.daily[6].dt);
            setSeisTempMax(resultado.daily[6].temp.max);
            setSeisTempMin(resultado.daily[6].temp.min);
            setSeisWeather(resultado.daily[6].weather[0].description);

            setSiete(resultado.daily[7].dt)
            setSieteTempMax(resultado.daily[7].temp.max);
            setSieteTempMin(resultado.daily[7].temp.min);
            setSieteWeather(resultado.daily[7].weather[0].description);

            

            setModalVisible(false)
            setShowScreen(true)
            setSelectValue("Que ciudad deseas ver?")    
        }
        catch (error){
            setModalVisible(false)
            Alert.alert(
            'Oops',
            'En este momento no podemos acceder a tu pedido. Por favor intentalo más tarde',
            [{text: 'Ok'}]
            )
        }
    }   
}; 

crearCiudad();
setTrigger(false);
}, [trigger]);


return(
    

    <ScrollView >

{!showScreen 

    ?  
    
    <View style={styles.viewEmptyText}>
            <Text style={styles.emptyText}>
              
            Elegí una ciudad para ver las condiciones climáticas actuales y el pronóstico
            </Text>
    </View>


    :
    
<View style={styles.view} >
    <Current 
    
    temp = {temp}
    sensacion = {sensacion}
    icono = {icono}
    condicion = {condicion}
    date = {date}
    ciudadClimaInput = {ciudadClimaInput}
    ciudad = {ciudad}
    
    />

 <CurrentExtended 
    
    max= {max}
    min={min}
    wind={wind}
    humidity={humidity}

    sunrise={sunrise}
    sunset={sunset}
    
    /> 


  <View style={styles.viewPronostico}>
<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(uno)}</Text>
        <Text style={styles.pronTextWea}>{unoWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(unoTempMax)}º / {parseInt(unoTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(dos)}</Text>
        <Text style={styles.pronTextWea}>{dosWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(dosTempMax)}º / {parseInt(dosTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(tres)}</Text>
        <Text style={styles.pronTextWea}>{tresWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(tresTempMax)}º / {parseInt(tresTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(cuatro)}</Text>
        <Text style={styles.pronTextWea}>{cuatroWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(cuatroTempMax)}º / {parseInt(cuatroTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(cinco)}</Text>
        <Text style={styles.pronTextWea}>{cincoWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(cincoTempMax)}º / {parseInt(cincoTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(seis)}</Text>
        <Text style={styles.pronTextWea}>{seisWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(seisTempMax)}º / {parseInt(seisTempMin)}º</Text>
    </View>

</View>

<View style={styles.pronostico}>

    <View style={styles.pronText}>
        <Text style={styles.pronTextDay}>{obtenerFecha(siete)}</Text>
        <Text style={styles.pronTextWea}>{sieteWeather}</Text>
    </View>
    
    <View style={styles.pronTemp}>
        <Text style={styles.pronTempNum}>{parseInt(sieteTempMax)}º / {parseInt(sieteTempMin)}º</Text>
    </View>

</View>
</View>
</View>
    
    
    
}
    
</ScrollView>
)
}


export default ObtenerClima;

const styles = StyleSheet.create({


pronostico:{
    width: '90%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderColor: '#F0A500',
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    
},

viewPronostico:{
    marginBottom: 120,
    marginTop:20,
    },

pronText:{
    width: '60%',
    textAlign: 'left'
},

pronTextDay:{
    fontSize:18,
},

pronTextWea:{
    fontStyle: 'italic'
},

pronTemp:{
    width: '40%',
    textAlignVertical: 'center',
    justifyContent: 'center',
    
},

pronTempNum:{
    fontSize: 18,
    textAlign: 'right',
},

view:{
    alignItems: 'center',   
},

viewEmptyText:{
    width: "100%",
    marginBottom: 110,
    justifyContent: 'center',
    alignItems: 'center',
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