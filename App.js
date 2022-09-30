// expo start
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Merchant from "./merchant/Merchant"
import Client from "./client/Client"

export default function App() {
  return (
    <View style={styles.container}>
      <Client></Client>
    </View>
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



