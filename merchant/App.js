import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import logo_transparent from './assets/logo_transparent.png'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image
          style={styles.Logo}
          source={require(assets)} />
        <Text style={styles.Header}>Nile</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b409c',
  },

  Header: {
    margin: 10,
    fontSize: 30,
    color: 'white',
  },



});