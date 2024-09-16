import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import Nosotros from "../components/About/Nosotros";

export default function About({ navigation }) {
  return (
    // Color para la seccion de la barra de carga y hora de los celulares - que sea de color morado, el mismo color base de la app
    <ScrollView style={styles.scrollView}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ea" />

      <Nosotros navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // Color de fondo para la seccion "acerca de"
    backgroundColor: "rgba(125, 125, 125, 0.1)",
  },
});
