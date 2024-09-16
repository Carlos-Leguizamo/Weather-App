import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


export default function Nosotros() {
  return (
    <View style={styles.view}>
      <View style={styles.card}>
        <Text style={styles.textTitulo}>Desarrollo</Text>
        <Text style={styles.text}>
          La aplicación fue desarrollada en el marco de la especialización en
          desarrollo mobile patrocinada por Codo a Codo e IBM.{"\n"}Creada en su
          totalidad en React Native y utilizando el framework EXPO.{"\n"}Se
          trabajó con Github como herramienta colaborativa y versionador de
          código.
        </Text>
      </View>
      <View style={styles.cardTeam}>
        <Text style={styles.textTitulo}>EQUIPO</Text>
        <View style={styles.card}>
          <Text style={styles.textTituloTeam}>Federico Ferrelli</Text>
          <Text style={styles.text}>
            Economista especializado en finanzas corporativas. Frontend developer in the making.
          </Text>
          <Image
            source={require("../../assets/images/Fede.jpg")}
            style={styles.image}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.textTituloTeam}>Guillermo Girolimini</Text>
          <Text style={styles.text}>
            Analista Programador de Sistemas. Docente de la asignatura
            Informática de Nivel Medio del Ministerio de Educación de la
            Provincia de Córdoba
          </Text>

          <Image
            source={require("../../assets/images/Guille.jpg")}
            style={styles.image}
          />
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
    borderColor: "#F0A500",
    borderWidth: 0.5,
    backgroundColor: "lightgrey",

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
    borderColor: "#F0A500",
    borderWidth: 0.5,
    backgroundColor: "darkgrey",

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
    textAlign: "center",
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
  textTituloTeam: {
    textAlign: "center",
    paddingHorizontal: 10,
    letterSpacing: 1.05,
    marginBottom: 20,
    color: "rgba(0,0,0, 0.6)",
    lineHeight: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: "5%",

  },
});
