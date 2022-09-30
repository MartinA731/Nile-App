import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.NavBar}>
      <View style={styles.left}>
        {/* This icon is a place holder for the logo */}
        <Image style = {styles.logo} source={require('../assets/logo_transparent.png')}/>
        
        <Text style={styles.Header}>Nile</Text>
      </View>

      <View style={styles.container}>
        <MaterialCommunityIcons name="menu" size={35} style={styles.nav} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  NavBar: {
    top: 0,
    width: '100%',
    height: '9%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0b409c',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },

  logo: {
    top: 10,
    width: 50,
    height: 130,
    margin: 2,
  },

  Header: {
    margin: 10,
    fontSize: 30,
    color: 'white',
  },

  container: {
    width: 50,
    height: 40,
    margin: 10,
    borderRadius: '10%',
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },

  nav: {
    color: 'white',
  }
});