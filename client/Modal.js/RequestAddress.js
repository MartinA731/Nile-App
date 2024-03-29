import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, ScrollView, Modal, TextInput, Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Merchant() {
    //Modal button
    const[popUp, setUp] = useState(false);
    const requestPage =()=>{
      setUp(!popUp);
    }
  
    //size buttons
    const[selectSize, setSize] = useState(0);
    const select = (item, id) =>{
      setSize(id)
    }
    //detail section text input 
    const[text, onChangeText] = React.useState(0);
  
    //category dropdown
  
  
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
      return button.map( (element, index) =>{
        return(
          <View key = {element.key}>
            <TouchableHighlight style = {[
              index === selectSize ? styles.sizeButtonSelected : styles.sizeButton
            ]}
            onPress = {(item) => select(item, index)}>
              <Text
              style = {[
                index === selectSize ? styles.textActive : null
              ]}>{element.title}</Text>
            </TouchableHighlight>
          </View>
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
          <View>
            {popUp?
                <Modal transparent={true}>
                  <View style = {styles.popMain} id = "page1">
                    {/* first page of Modal */}
                    <View style = {styles.popUp}>
                      <Text style ={styles.popText}>Request Address</Text>
                      {/* BEGIN product details section */}
                      <View>
                        <View>
                          <Text style ={styles.productText}>Details</Text>
                        </View>
                        <View >
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeText}
                          placeholder = "Enter Product Details or SKU"
                          />
                        </View>
                      </View>
                      {/* END product details section */}
  
                      {/* BEGIN size selection section */}
                      <View>
                        <Text style ={styles.productText}>Size</Text>
                        <View style ={styles.buttonContainer}>
                          <View style = {styles.buttonContainer}>{list()}</View>
                        </View>
                      </View>
                      {/* END size selection section */}
  
                      {/* BEGIN Category section */}
                      <View>
                        <View>
                          <Text style ={styles.productText}>Category</Text>
                        </View>
                        <View style={styles.input}></View>
                      </View>
                      {/* END Category section */}
  
                      <View style = {styles.popButtons}>
                        {/* CLOSE Button*/}
                        <TouchableHighlight style ={styles.closeButton} 
                          onPress = {requestPage}>
                        <Text style ={styles.buttonText}> Close </Text> 
                        </TouchableHighlight>
                        
                        {/* NEXT Button */}
                        <TouchableHighlight style ={styles.nextButton}>
                        <Text style ={styles.buttonText}> Next</Text> 
                        </TouchableHighlight>
  
                      </View>
  
                    </View>
  
                  </View>
  
                </Modal>: null}
  
              </View>
  
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
      justifyContent: 'space-between',
      marginLeft: 10,
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
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor: '#ffffff',
      borderRadius: 6,
      borderWidth: 2,
      marginRight: 5
    },
  
    sizeButtonSelected:{
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor: '#0B409C',
      borderRadius: 6,
      borderWidth: 2,
      marginRight: 5
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
    },
  
    textActive:{
      color: '#ffffff'
    }
  
  });