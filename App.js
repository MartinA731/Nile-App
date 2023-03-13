import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

import Merchant from "./merchant/Merchant"
import Client from "./client/Client"
import Registration from './RegistrationForm/RegistrationForm'

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Registration1 from './RegistrationForm/Custom/Registration1'
import Registration2 from './RegistrationForm/Custom/Registration2'
import Registration3 from './RegistrationForm/Custom/Registration3'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Registration1')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Registration1" component={Registration1} />
        <Stack.Screen name="Registration2" component={Registration2} />
        <Stack.Screen name="Registration3" component={Registration3} />
        <Stack.Screen name="Merchant" component={Merchant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



