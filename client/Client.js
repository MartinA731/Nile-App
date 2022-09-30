import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Pressable } from 'react-native';
import NavBar from './NavBar';
import Constants from 'expo-constants';

//http://localhost:3001/merchants/user2@gmail.com
//CHANGE THIS WHEN REGISTRATION + LOGIN DONE

const curUser = "user2@gmail.com"

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost
  .split(`:`)
  .shift()
  .concat(`:3001`)}/merchants/` + curUser;
  
// // three parameters in body are name, pickupID, date
// fetch(uri, {
//     method: "POST", 
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(
//         { name: "Guy",
//         pickupID : "id123",
//         date : "09/30/22"}
//     )
// })
// .then(res => {
//     if (res.ok) { console.log("HTTP request successful") }
//     else { console.log("HTTP request unsuccessful") }
//     return res
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

export default function Merchant() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Pressable style ={styles.requestButton} 
      onPress = {() => Alert.alert('Pressed') }>
        <Text style ={styles.buttonText}> Request Now</Text> 
      </Pressable >

      {/* Pending Transaction Section*/}
      <View style ={styles.transaction}>
        <Text style ={styles.productText}>Product:</Text>
        <Text style ={styles.productText}>Waiting for pickup point:</Text>
      </View>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: '#fff',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#EFF6FF',
    alignItems:'flex-start',
    margin: 6
  },

  productText:{
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    paddingHorizontal: 15,
    marginBottom: 30,
    marginTop: 10
  }

});