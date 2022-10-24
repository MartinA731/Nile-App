import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

export default function App(){
    return (
        <View style={styles.container}>
        <Text style={styles.greyText}>Step 2. Point of Contact</Text>

        { /*section 1*/ }
        <View style={styles.section}>
            <Text style={styles.heading}>Point of Contact Name</Text>
            <View style={styles.typeBox}>
                <TextInput placeholder ='Name'/>
            </View>
        </View>

        { /*section 2*/ }
        <View style={styles.section}>
            <Text style={styles.heading}>Phone Number</Text>
            <View style={styles.typeBox}>
                <TextInput placeholder ='Phone Number'/>
            </View>
        </View>

        { /*section 3*/ }
        <View style={styles.section}>
            <Text style={styles.heading}>Email</Text>
            <View style={styles.typeBox}>
                <TextInput placeholder ='Email Address'/>
            </View>
        </View>

        {/*button backward*/}
        <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

            {/*button forward*/}
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

        </View>


        <Text style={styles.smallText}> Already Have an Account? Log In</Text>
    </View>
   
)
}

const styles = StyleSheet.create({
container:{
    marginLeft: 15,
    marginRight: 15,
},

greyText:{
    textAlign: 'center',
    color: '#81898b',
    paddingBottom: 15,
    fontSize: 15,
},

typeBox: {
    marginTop: 5,
    backgroundColor: 'white',
    borderColor: '#e0e4e6',
    borderWidth: 1,
    borderRadius: 5,
    alignContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 4,
},

heading: {
    paddingHorizontal: 4,
    fontSize: 20,
},

section:{
    paddingBottom: 12,
},

buttonBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
},

button1:{
    marginTop: 10,
    width: '30%',
    borderRadius: 15,
    padding: 5,
    backgroundColor:'#737b7d',
    alignItems: 'center',
    marginVertical: 5,  
},

button2:{
    marginTop: 10,
    width: '30%',
    borderRadius: 15,
    padding: 5,
    backgroundColor:'#0059cf',
    alignItems: 'center',
    marginVertical: 5,  
},

buttonText:{
    color: 'white',
    fontSize: 18,
},

smallText:{
    marginTop: 5,
    paddingBottom: 15,
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#8c9396',
},

});