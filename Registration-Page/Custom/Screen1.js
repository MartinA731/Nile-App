import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.greyText}>Step 1. Business Information</Text>

            { /*section 1*/ }
            <View style={styles.section}>
                <Text style={styles.heading}>Business Name</Text>
                <View style={styles.typeBox}>
                    <TextInput placeholder ='Business Name'/>
                </View>
            </View>

            { /*section 2*/ }
            <View style={styles.section}>
                <Text style={styles.heading}>Business Address</Text>
                <View style={styles.typeBox}>
                    <TextInput placeholder ='Address Line 1'/>
                </View>

                <View style={styles.typeBox}>
                    <TextInput placeholder ='Address Line 2'/>
                </View>
                <View style={styles.typeBox2}>
                    <View style={styles.city}>
                        <TextInput placeholder ='City'/>     
                    </View>
                    <View style={styles.state}>
                        <TextInput placeholder ='State'/>     
                    </View>
                    <View style={styles.zip}>
                        <TextInput placeholder ='Zip'/>     
                    </View>
                    
                </View>
            </View>


            { /*section 3*/ }
            <View style={styles.section}>
                <Text style={styles.heading}>Business Type</Text>
                <View style={styles.typeBox}>
                    <TextInput placeholder ='Select Business Type'/>
                </View>
            </View>

            { /*section 4*/ }
            <View style={styles.section}>
                <Text style={styles.heading}>Years Open</Text>
                <Text style={styles.smallText2}>How many years has this location operated?</Text>
                <View style={styles.typeBox}>
                    <TextInput placeholder ='Years Open'/>
                </View>
            </View>

            { /*section 5*/ }
            <View style={styles.section}>
                <Text style={styles.heading}>Business LLP Number</Text>
                <Text style={styles.smallText2}>Optional</Text>
                <View style={styles.typeBox}>
                    <TextInput placeholder ='LLP Number'/>
                </View>
            </View>

            {/*button*/}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Text style={styles.smallText}> Already Have an Account? Log In</Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'column',
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

    typeBox2:{
        flexDirection: 'row',
    },

    city:{
        marginTop: 5,
        backgroundColor: 'white',
        borderColor: '#e0e4e6',
        borderWidth: 1,
        borderRadius: 5,
        alignContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        flex: 0.5,
    },

    state:{
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: 'white',
        borderColor: '#e0e4e6',
        borderWidth: 1,
        borderRadius: 5,
        alignContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        flex: 0.3,
    },

    zip:{
        marginTop: 5,
        marginLeft: 15,
        backgroundColor: 'white',
        borderColor: '#e0e4e6',
        borderWidth: 1,
        borderRadius: 5,
        alignContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        flex: 0.3,
    },

    heading: {
        paddingHorizontal: 4,
        fontSize: 20,
    },

    section:{
        paddingBottom: 12,
    },

    button:{
        marginTop: 10,
        width: '30%',
        borderRadius: 15,
        padding: 5,
        backgroundColor:'#0059cf',
        alignItems: 'center',
        marginVertical: 5,  
        alignSelf: 'flex-end',      
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

    smallText2:{
        marginTop: 5,
        paddingHorizontal: 4,
        fontSize: 12,
        color: '#436db4',
    }

});

