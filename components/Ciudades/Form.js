import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, Keyboard } from 'react-native';

const Form = ({ ciudadInput, setCiudadInput, listadoCiudades, setListadoCiudades, almacenarCiudades, setModalVisibleCiudades, setModalAccion }) => {
    const [ciudadesColombia, setCiudadesColombia] = useState([]);

    // Función para obtener las ciudades desde la API
    const obtenerCiudadesColombia = async () => {
        try {
            const respuesta = await fetch('https://api-colombia.com/api/v1/City');
            const data = await respuesta.json();
            setCiudadesColombia(data); // Guardamos las ciudades en el estado
        } catch (error) {
            Alert.alert('Error', 'No se pudo obtener la lista de ciudades.', [{ text: 'Ok' }]);
        }
    };

    // Obtener las ciudades cuando el componente se monte
    useEffect(() => {
        obtenerCiudadesColombia();
    }, []);

    // Validar que la ciudad ingresada esté en la lista de ciudades de la API
    const validarCiudadColombiana = (ciudadInput) => {
        return ciudadesColombia.some((ciudad) => ciudad.name.toLowerCase() === ciudadInput.toLowerCase());
    };

    // Crear y agregar ciudades
    const crearCiudad = async () => {
        if (ciudadInput === '' || !ciudadInput) {
            Alert.alert('Oops', 'Debes ingresar una ciudad', [{ text: 'Ok' }]);
            setModalVisibleCiudades(false);
            return;
        }

        // Validar que la ciudad esté en la lista de Colombia
        if (!validarCiudadColombiana(ciudadInput)) {
            Alert.alert('Oops', 'La ciudad ingresada no está dentro de las ciudades permitidas de Colombia. Verifica que esté bien escrita.', [{ text: 'Ok' }]);
            setModalVisibleCiudades(false);
            return;
        }

        // Si la ciudad es válida, continúa con la llamada a la API de OpenWeatherMap
        const appikey = 'ba1cc65b03d369778c8ef79d62d52ffd';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadInput}&appid=${appikey}`;

        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const citi_name = await resultado.name;

            if (citi_name) {
                if (listadoCiudades.includes(citi_name)) {
                    setModalVisibleCiudades(false);
                    Alert.alert('Oops', 'Parece que la ciudad que ingresaste ya figura en la lista', [{ text: 'Ok' }]);
                } else {
                    const ciudadesNuevas = [...listadoCiudades, citi_name];
                    setListadoCiudades(ciudadesNuevas);
                    almacenarCiudades(JSON.stringify(ciudadesNuevas));
                }
            } else {
                setModalVisibleCiudades(false);
                Alert.alert('Oops', 'Parece que la ciudad que ingresaste no existe. Por favor verifica que esté bien escrita.', [{ text: 'Ok' }]);
            }
        } catch (error) {
            Alert.alert('Oops', 'En este momento no podemos acceder a tu pedido. Por favor inténtalo más tarde.', [{ text: 'Ok' }]);
        }
    };

    const btnAction = () => {
        setModalVisibleCiudades(true);
        Keyboard.dismiss();
        setModalAccion('Guardando datos para');
        crearCiudad();
    };

    return (
        <View style={styles.view}>
            <View style={styles.form}>
                <TextInput
                    placeholder='Agrega una ciudad al listado'
                    placeholderTextColor="rgb(125, 125, 125)"
                    defaultValue={ciudadInput}
                    onChangeText={(ciudad) => setCiudadInput(ciudad)}
                    style={styles.input}
                />

                <View style={styles.viewbtn}>
                    <TouchableHighlight style={styles.btnAgregar} onPress={() => btnAction()}>
                        <Text style={styles.textoBoton}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    view: {
        marginTop: 0,
        marginBottom: 0,
        width: "100%",
        height: 80,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: 100,
    },
    form: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '90%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    input: {
        height: 60,
        backgroundColor: "#fff",
        paddingLeft: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        fontSize: 18,
        color: 'black',
        width: '85%',
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
    viewbtn: {
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
        height: 50,
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
});
