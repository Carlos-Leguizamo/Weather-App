import React from "react";

import { Image, Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native";

const Loading = ({modalVisibleMapas, ciudad}) => {
  
  return (
    <View >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleMapas}
        
       
      >
        {<View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Mostrando en el mapa</Text>

            <Image 
            source={require("../../assets/images/loadingmap4.png")}
            style={styles.image}/>

            <Text style={styles.modalTextCiti}>{ciudad}</Text>

            <ActivityIndicator size = "large" color="black" style = {styles.spinner} />
             
           
          </View>
        </View>}

      </Modal>
    </View>
  );
};

export default Loading;


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: '100%',   
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: 'rgba(125, 125, 125, 0.65)',
  },

  modalView: {
    backgroundColor: "#F0A500",
    borderRadius: 20,
    padding: '5%',
    alignItems: "center",
    justifyContent: 'space-evenly',


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  
  modalText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: '5%'
  }, 
  
  modalTextCiti:{
      fontSize: 30,
      fontWeight: 'bold', 
      textAlign: 'center',
      marginBottom: '5%'
  },

  image:{
     width: 150,
     height: 150,
     marginBottom: '5%'
  }
});


