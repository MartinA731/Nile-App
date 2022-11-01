import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, ScrollView, Modal, TextInput} from 'react-native';

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
  const[popUp, setUp] = useState(false);
  const requestPage =()=>{
    setUp(!popUp);
  }

  const[isPress, setIsPress] = useState(false);
  const pressed = () =>{
    setIsPress(!isPress);
  }

  const[text, onChangeText] = React.useState("Enter Product Details or SKU");


  const button = [
    {
      key: "1",
      title: "Small"
    },
    {
      key: "2",
      title: "Medium"
    },
    {
      key: "3",
      title: "Large"
    },
  ]

  const list = () =>{
    return button.map( (element) =>{
      return(
        <TouchableHighlight key = {element.key} style = {styles.buttonContainer}>
          <View style = {styles.sizeButton}>
            <Text>{element.title}</Text>
          </View>
        </TouchableHighlight>
      );
    }


    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <TouchableHighlight style ={styles.requestButton} 
      onPress = {requestPage}>
        <Text style ={styles.buttonText}> Request Now</Text> 
      </TouchableHighlight>

      <View className = "popUp">
        {popUp?
            <Modal transparent={true}>
              <View style = {styles.popMain}>
                <View style = {styles.popUp}>
                  <Text style ={styles.popText}>Request Address</Text>

                  <View>
                    <View>
                      <Text style ={styles.productText}>Details</Text>
                    </View>
                    <View >
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={text}
                    />
                      
                    </View>
                  </View>

                  <View >
                    <Text style ={styles.productText}>Size</Text>
                    <View style ={styles.buttonContainer}>
                      <View>{list()}</View>

                    </View>

                  </View>

                  <View>
                    <Text style ={styles.productText}>Category</Text>
                  </View>

                  <View style = {styles.popButtons}>
                    <TouchableHighlight style ={styles.closeButton} 
                      onPress = {requestPage}>
                    <Text style ={styles.buttonText}> Close </Text> 
                    </TouchableHighlight>

                    <TouchableHighlight style ={styles.nextButton} 
                      onPress = {requestPage}>
                    <Text style ={styles.buttonText}> Next</Text> 
                    </TouchableHighlight>

                  </View>

                </View>

              </View>

            </Modal>: null}

      </View>

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
  popMain:{
    flex: 1,
    backgroundColor: "#000000aa",
  },

  popUp:{
    height: "auto",
    weight: "auto",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "flex-start",
    backgroundColor: "#B5D4FF",
    borderRadius: 10
  },

  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
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
    marginBottom: 10,
    marginTop: 20
  },

  popText:{
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    paddingHorizontal: 15,
    marginTop: 20
  },

  popButtons:{
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10
  },

  nextButton:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0B409C',
    margin: 6
  },

  closeButton:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff8476',
    margin: 6,
  },

  buttonContainer:{ 
    flexDirection: "row",
    width : '100%',
    padding: 10,
    backgroundColor: 'red'
  },

  popButtons2:{
    padding: 20,
    marginLeft: 10,
    alignItems: "center",
    textAlign: "center",
    alignContent:"center",
    backgroundColor:"red",
    width: "95%"
  },

  sizeButton:{
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    borderRadius: 4,
    backgroundColor: '#ff8476',
  },

  pressButton:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: 'blue',
  },

  input:{
    height: 45,
    width: '100%',
    marginLeft: 15,
    padding: 12,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8
  }

});