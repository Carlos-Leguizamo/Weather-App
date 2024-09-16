import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View, StatusBar} from 'react-native';
import imagen from '../../assets/images/HELADOS.png';


const AnimacionEntrada = ({setAnimated}) => {
   

   const [show] = useState(new Animated.Value(0));
   const [font] = useState(new Animated.Value(1));

   useEffect(() => {
     Animated.parallel([
       Animated.timing(show, {
         toValue: 1,
         duration: 2500,
        
         useNativeDriver: false,
       }),
     ]).start(() =>
       Animated.timing(font, {
         toValue: 1.3,
         duration: 2500,
         useNativeDriver: false,
       }).start(() => setAnimated(true)),
     );
   }, []);

   
     return (
       <>
         <StatusBar
           animated={true}
           backgroundColor='#F0A500'
           barStyle="light-content"
         />
         <View style={styles.container}>
           <Animated.Image
             style={[styles.image, {opacity: show , transform: [{scale: font}] }]}
             source={imagen}
           />

         </View>
       </>
     );
  
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: 'rgba(125, 125, 125, 0.2)',
     justifyContent: 'center'
    
    },

   image: {
     width: '80%',
     resizeMode: 'contain',
    
   },

   text: {
     fontSize: 40,
     color: '#F0A500',
   },
});

export default AnimacionEntrada;

