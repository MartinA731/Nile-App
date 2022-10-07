import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableHighlight, ScrollView  } from 'react-native';

import NavBar from './NavBar';
import Constants from 'expo-constants';

//http://localhost:3001/merchants/user2@gmail.com
//CHANGE THIS WHEN REGISTRATION + LOGIN DONE

const curUser = "user2@gmail.com"

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost
  .split(`:`)
  .shift()
  .concat(`:3001`)}/merchants/` + curUser;
  
// // three parameters in body are name, pickupID, date
// fetch(uri, {
//     method: "POST", 
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(
//         { name: "Guy",
//         pickupID : "id123",
//         date : "09/30/22"}
//     )
// })
// .then(res => {
//     if (res.ok) { console.log("HTTP request successful") }
//     else { console.log("HTTP request unsuccessful") }
//     return res
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

export default function Merchant() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <TouchableHighlight  style ={styles.requestButton} 
      onPress = {() => Alert.alert('Pressed') }>
        <Text style ={styles.buttonText}> Request Now</Text> 
      </TouchableHighlight  >

      {/* Pending Transaction Section*/}
        {/* Step Component */}
        <View style = {styles.progress}>
          <View style = {styles.step}>
          </View >

        </View>


        <ScrollView  style ={styles.transaction}>
          <Text style ={styles.productText}>Product:</Text>
          <Text style ={styles.productText}>Waiting for pickup point:</Text>
        </ScrollView>



      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  progress:{
    alignItems:'center'
  },

  step:{
    margin: 2,
    alignItems:'center',
    alignContent:'center',
    width: 100,
    height: 8,
    backgroundColor: '#0B409C',
    borderRadius: 20
  },

  requestButton: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff8476',
    margin: 6
  },

  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  transaction:{
    borderRadius: 4,
    backgroundColor:'#EFF6FF',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  productText:{
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    paddingHorizontal: 15,
    marginBottom: 30,
    marginTop: 20
  }

});