import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Nosotros() {
  return (
    <View style={styles.view}>
      <View style={styles.card}>
        <Text style={styles.textTitulo}>Desarrollo del Proyecto</Text>
        <Text style={styles.text}>
          Esta aplicación permite consultar el pronóstico del clima para los próximos 7 días en todos los municipios colombianos. {"\n"} {"\n"}

          Fue desarrollada en el marco del curso de Programación de Dispositivos Móviles de la Universidad Surcolombiana.
          Implementada en su totalidad utilizando React Native, con el apoyo del framework Expo para optimizar el proceso de desarrollo.{"\n"}
          Además, se empleó GitHub como herramienta de colaboración y control de versiones, garantizando una gestión eficiente del código.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textTitulo}>Autores</Text>
        <Text style={[styles.text, { textAlign: 'center' }]}>
          Carlos Eduardo Leguizamo Ramírez.{"\n"}
          John Camilo Garzón Vargas.{"\n"}
          Santiago Firigua Palma.
    </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.textTitulo}>Repositorio</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Carlos-Leguizamo/Weather-App")}>
            <Icon name="github" size={30} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  card: {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#6200ea",
    borderWidth: 0.5,
    backgroundColor: "lightgrey", //Color de fondo para el contenedor de Desarrollo del Proyecto 

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
  cardTeam: {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#6200ea",
    borderWidth: 0.5,
    backgroundColor: "lightgrey", //Color de fondo para el contenedor de Equipo de desarrollo 

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
  text: {
    textAlign: "justify",
    paddingHorizontal: 10,
    letterSpacing: 1.05,
    marginBottom: 20,
    color: "rgba(0,0,0, 0.6)",
    lineHeight: 20,
  },
  textTitulo: {
    textAlign: "center",
    paddingHorizontal: 10,
    letterSpacing: 1.05,
    marginBottom: 20,
    color: "rgba(0,0,0, 0.6)",
    lineHeight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
