import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, Keyboard } from 'react-native';
import ciudadesColombianasJson from './colombia.json';  // Asegúrate de tener este archivo en tu proyecto.

const Form = ({ ciudadInput, setCiudadInput, listadoCiudades, setListadoCiudades, almacenarCiudades, setModalVisibleCiudades, setModalAccion }) => {
    const [ciudadesColombia, setCiudadesColombia] = useState([]);

    // Función para obtener las ciudades desde el archivo JSON local
    const obtenerCiudadesColombia = async () => {
        try {
            // Aquí directamente asignas las ciudades del archivo JSON al estado
            const data = ciudadesColombianasJson;
            const todasLasCiudades = data.flatMap(departamento => departamento.ciudades);
            setCiudadesColombia(todasLasCiudades);  // Guardamos todas las ciudades en el estado
        } catch (error) {
            Alert.alert('Error', 'No se pudo cargar la lista de ciudades desde el archivo.', [{ text: 'Ok' }]);
        }
    };

    // Obtener las ciudades cuando el componente se monte
    useEffect(() => {
        obtenerCiudadesColombia();
    }, []);

    // Validar que la ciudad ingresada esté en la lista de ciudades del JSON
    const validarCiudadColombiana = (ciudadInput) => {
        return ciudadesColombia.some((ciudad) => ciudad.toLowerCase() === ciudadInput.toLowerCase());
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

        // Si la ciudad es válida, continúa con la lógica de agregarla
        if (listadoCiudades.includes(ciudadInput)) {
            setModalVisibleCiudades(false);
            Alert.alert('Oops', 'Parece que la ciudad que ingresaste ya figura en la lista', [{ text: 'Ok' }]);
        } else {
            const ciudadesNuevas = [...listadoCiudades, ciudadInput];
            setListadoCiudades(ciudadesNuevas);
            almacenarCiudades(JSON.stringify(ciudadesNuevas));
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
