import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import Nosotros from "../components/About/Nosotros";

export default function About({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar barStyle="light-content" backgroundColor="#F0A500" />

      <Nosotros navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "rgba(125, 125, 125, 0.1)",
  },
});
