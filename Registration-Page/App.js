import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CustomInput from './Custom/Screen1';
import CustomInput2 from './Custom/Screen2';
import CustomInput3 from './Custom/Screen3';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.top}>
        <Image
          style={styles.Logo}
          source={require('./assets/logo_transparent1.png')} />

        <Text style={styles.text}>Merchant</Text>

      </View>

      <ScrollView style={styles.box}>
        <Text style={styles.heading}>Create Account</Text>
        
        { /*NOTED: the navigation feature is not yet created, to view each page, 
          please change the name below based on line 3-5*/ }
        <CustomInput3/>

      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b409c',
  },

  top: {
    marginTop: 0,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  Logo: {
    height: 90,
    width: '80%',
    maxWidth: 100,
    resizeMode: 'contain',
  },

  text: {
    color: '#eff6ff',
    marginRight: 10,
  },

  box: {
    flex: 0,
    height: 'auto',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    backgroundColor: '#eff6ff',
    borderRadius: 20,
    
  },

  heading: {
    marginTop: 15,
    textAlign: 'center',
    color: '#1f50a5',
    fontSize: 20,
  },



});