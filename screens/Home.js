import React  from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import AppStructure from '../components/Home/AppStructure';

export default function Home({navigation}){



    return(
       
        <ScrollView style={styles.scrollView}>
             <StatusBar barStyle = "light-content" backgroundColor='#F0A500' />

            
                <AppStructure navigation = {navigation}/>
            
        </ScrollView>
       
    );
};

const styles = StyleSheet.create({

    scrollView:{
        flex: 1,
        backgroundColor: 'rgba(125, 125, 125, 0.1)',
    },

  

})