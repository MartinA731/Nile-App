import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.greyText}>Step 3. Review & Create</Text>

            { /*section 1*/ }
            <View style={styles.section}>
                <View style={styles.headline}>
                    <Text style={styles.heading}>Business</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.buttonText2}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.typeBox}>
                    <Text style={styles.greyTitle}>Business Name</Text>
                    { /*merchant input -> the current input is a placeholder*/ }
                    <Text style={styles.input}>Starbucks</Text>

                    <Text style={styles.greyTitle}>Business Address</Text>
                    { /*merchant input*/ }
                    <Text style={styles.input}>123 Main St. Pittsburgh, PA 15213</Text>

                    <Text style={styles.greyTitle}>Business Type</Text>
                    { /*merchant input*/ }
                    <Text style={styles.input}>Cafe</Text>

                    <Text style={styles.greyTitle}>Year Location Opened</Text>
                    { /*merchant input*/ }
                    <Text style={styles.input}>2003</Text>

                    <Text style={styles.greyTitle}>Business LLP Number</Text>
                    { /*merchant input*/ }
                    <Text style={styles.input}>OC331112</Text>
                    
                </View>
            </View>

            { /*section 2*/ }
            <View style={styles.section}>
                <View style={styles.headline}>
                    <Text style={styles.heading}>Point of Contact</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.buttonText2}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.typeBox}>
                    <Text style={styles.greyTitle}>Point of Contact Name</Text>
                    { /*merchant input -> the current input is a placeholder*/ }
                    <Text style={styles.input}>James Russell</Text>

                    <Text style={styles.greyTitle}>Phone Number</Text>
                    { /*merchant input -> the current input is a placeholder*/ }
                    <Text style={styles.input}>412-555-5555</Text>

                    <Text style={styles.greyTitle}>Email</Text>
                    { /*merchant input -> the current input is a placeholder*/ }
                    <Text style={styles.input}>james.russell@gmail.com</Text>
                    
                </View>
            </View>

            {/*button*/}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'column',
    },

    headline:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },

    greyText:{
        textAlign: 'center',
        color: '#81898b',
        paddingBottom: 15,
        fontSize: 15,
    },

    typeBox: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 4,
        flexDirection: 'column',
    },

    heading: {
        paddingHorizontal: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#2a59a9',
    },

    section:{
        paddingBottom: 12,
    },

    button:{
        marginTop: 10,
        width: '100%',
        borderRadius: 15,
        padding: 5,
        backgroundColor:'#0059cf',
        alignItems: 'center',
        marginVertical: 5,  
        alignSelf: 'flex-end',      
    },

    editButton:{
        width: '22%',
        borderRadius: 15,
        padding: 4,
        backgroundColor:'#737b7d',
        alignItems: 'center',
    },

    buttonText2:{
        color: 'white',
        fontSize: 15,
    },

    buttonText:{
        color: 'white',
        fontSize: 18,
    },

    greyTitle:{
        marginTop: 5,
        paddingBottom: 4,
        fontSize: 15,
        color: '#8c9396',
    },

    input:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8,
    },

});

