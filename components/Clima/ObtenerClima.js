import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import Current from './Current';    
import CurrentExtended from './CurrentExtended';

const ObtenerClima = ({ latitudCiudad, longitudCiudad, trigger, setTrigger, ciudadClimaInput, ciudad, showScreen, setShowScreen, setModalVisible, setSelectValue }) => {
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

    useEffect(() => {
        const crearCiudad = async () => {
            if (latitudCiudad) {
                const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudCiudad}&lon=${longitudCiudad}&units=metric&lang=es&appid=${appikey}`;
                
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    
                    // Obtener datos actuales
                    setTemp(resultado.main.temp);
                    setSensacion(resultado.main.feels_like);
                    setCondicion(resultado.weather[0].description);
                    setIcono(resultado.weather[0].icon);
                    setDate(resultado.dt);
                    setMax(resultado.main.temp_max);
                    setMin(resultado.main.temp_min);
                    setWind(resultado.wind.speed);
                    setHumidity(resultado.main.humidity);
                    setSunrise(resultado.sys.sunrise);
                    setSunset(resultado.sys.sunset);

                    setModalVisible(false);
                    setShowScreen(true);
                    setSelectValue("¿Qué ciudad deseas ver?");
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    setModalVisible(false);
                    Alert.alert('Oops', 'En este momento no podemos acceder a tu pedido. Por favor inténtalo más tarde', [{ text: 'Ok' }]);
                }
            }   
        };

        crearCiudad();
        setTrigger(false);
    }, [trigger]);

    return (
        <ScrollView>
            {!showScreen ? (
                <View style={styles.viewEmptyText}>
                    <Text style={styles.emptyText}>
                        Elige una ciudad para ver las condiciones climáticas actuales
                    </Text>
                </View>
            ) : (
                <View style={styles.view}>
                    <Current 
                        temp={temp}
                        sensacion={sensacion}
                        icono={icono}
                        condicion={condicion}
                        date={date}
                        ciudadClimaInput={ciudadClimaInput}
                        ciudad={ciudad}
                    />
                    <CurrentExtended 
                        max={max}
                        min={min}
                        wind={wind}
                        humidity={humidity}
                        sunrise={sunrise}
                        sunset={sunset}
                    /> 
                </View>
            )}
        </ScrollView>
    );
};

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
        borderColor: '#6200ea',
        textAlign: 'center',
        color: 'grey',
        fontSize: 15,
    
    }
});
