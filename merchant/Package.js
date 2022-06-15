import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput, FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = { colorId: 0 };
    }

    changeColor = (id) => {
        this.setState({ colorId: id });
    }



    render() {


        return (
            <View style={styles.mainContainer} >
                <StatusBar style='auto' />

                <View style={styles.packages}>

                    <Text style={styles.header}>Packages Awaiting:</Text>

                    <TouchableOpacity style={this.state.colorId === 1 ? styles.pressed : styles.buttonHolder1}
                        onPress={() => this.changeColor(1)}>
                        <Text style={this.state.colorId === 1 ? styles.textPressed : styles.buttonText}> Arrival</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.colorId === 2 ? styles.pressed2 : styles.buttonHolder2}
                        onPress={() => this.changeColor(2)}>
                        <Text style={this.state.colorId === 2 ? styles.textPressed : styles.buttonText}>Pick Up</Text>
                    </TouchableOpacity>

                </View>
                {/*this is the search bar*/}
                <View style={styles.searchBar} >
                    <EvilIcons name="search" size={30} style={styles.searchIcon} />
                    <TextInput placeholder="Search" style={styles.searchText} /> 
                </View>
                

                {/*listing all the deliveries*/}
            


            </View >

        );
    }
}

const styles = StyleSheet.create({
    packages: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    header: {
        marginBottom: 20,
        fontSize: 25,
        paddingLeft: 15,
    },

    buttonHolder1: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginLeft: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#0b409c',
        borderRadius: '20%',
    },

    pressed: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginLeft: 12,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: '20%',
        borderColor: '#0b409c',
        backgroundColor: '#0b409c',
    },

    pressed2: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginRight: 12,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: '20%',
        borderColor: '#0b409c',
        backgroundColor: '#0b409c',
    },

    buttonText: {
        color: '#1648a0',
        fontSize: 20,
    },

    textPressed: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },

    buttonHolder2: {
        width: '45%',
        height: '40%',
        padding: 5,
        marginRight: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#0b409c',
        borderRadius: '20%',
    },

    searchBar: {
        margin: 10,
        height: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#387dd9',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    searchIcon: {
        padding: 5,
    },

    searchText: {
        padding: 2,
        fontSize: 20,
    },


});
