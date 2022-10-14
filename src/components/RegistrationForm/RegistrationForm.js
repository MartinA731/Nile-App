import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import CustomInput from './Custom/Registration1';
import CustomInput2 from './Custom/Registration2';
import CustomInput3 from './Custom/Registration3';
import {useState} from "react";
import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import qs from 'qs';


import { withRouter } from "react-router-dom";

export default function App(props) {


  const [state , setState] = useState({
    email : "",
    password : "",
    confirmPassword: "",
    client : false,
    merchant : false,
    successMessage: null,
    address: "",
    showAddress : false,
  })
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const redirectToMerchant = () => {
    props.updateTitle('Client')
    props.history.push({
        pathname:"/client",
        state:{
            login:state.email
         }
       });
  }

  const sendDetailsToServer = () => {
    console.log(props);
    if(state.email.length && state.password.length) {
        const payload={
            "email":state.email,
            "password":state.password,
        }
        var data = qs.stringify({
          'email': state.email,
          'password': state.password
        });
        var u = 'http://localhost:4000/user/register?email=' + state.email + "&password=" + state.password
        var config = {
          method: 'post',
          url: u,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          // redirectToMerchant();
        })
        .catch(function (error) {
          console.log(error);
        });
        
        
         
    } else {
        console.error('Please enter valid username and password')    
    }
  }

  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        onChangeText={onChangeText}
        value={text}
        onChange={handleChange}
      />
      <TextInput
        //onChangeText={(email) => setState({email})}
        onChangeText={(email) => setState(prevState => ({
          ...prevState,
          "email" : email
        }))}
        value={state.email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setState(prevState => ({
          ...prevState,
          "password" : password
        }))}
        value={state.password}
      />

      <View style={styles.top}>
        <Image
          style={styles.Logo}
          source={require('../../../assets/logo_transparent1.png')} />

        <Text style={styles.text}>Merchant</Text>

      </View>

      <ScrollView style={styles.box}>
        <Text style={styles.heading}>Create Account</Text>
        
        { /*NOTED: the navigation feature is not yet created, to view each page, 
          please change the name below based on line 3-5*/ }
        <CustomInput3/>

      </ScrollView>

      <View style={styles.top}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Button
        onPress={sendDetailsToServer()}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <View style={styles.top}>
          {state.email ? <Text> {state.email} </Text>: null}
      </View>
      
      <View style={styles.top}>
          {state.password ? <Text> {state.password} </Text>: null}
      </View>

      <View style={styles.top}>
          {state.successMessage ? <Text> {state.successMessage} </Text>: null}
      </View>


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