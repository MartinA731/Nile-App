import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function OrderDetails() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.Number}>Number</Text>
            <Text style={styles.Carrier}>Carrier</Text>

            <View style={styles.update}>
                <View style={styles.step}>
                    <Text style={styles.text}>1</Text>
                </View>
                <Text>Arrival</Text>

                <View style={styles.bar}/>
                <View style={styles.step}>
                    <Text style={styles.text}>2</Text>
                </View>
                <Text>Pick UP</Text>
            </View>

            <View style={styles.Info}>
                <Text style={styles.text}>Awaiting Arrival</Text>
                <Text style={styles.text}>Arrival Date:</Text>
                <Text style={styles.text}>Arrived</Text>
                <Text style={styles.text}>Pick Up</Text>
            </View>

            <View style={styles.rightSide}></View>
    
            
        </View>
        <Text>Report a Problem</Text>
        <View style={styles.box}>
            <Text>No Other Packages for Ava at:</Text>
        </View>
    
        


      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 8,
  },

  box: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#C3CBCD'

  },

  Name:{
    fontSize: 24,
    marginBottom: 10,
    textDecorationLine: 'underline'
  },

  Number:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  Carrier:{
    fontSize: 24,
    marginBottom: 10
  },

  update:{
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    textAlign: 'center'
  },

  step:{
    width: 30, 
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#94FC92',
    alignItems: 'center',
  },

  text:{
    textAlign: 'center',
    alignItems: 'center',

  },

  bar:{
    width: '12%',
    height: '8%',
    backgroundColor: '#737B7D'
  },

  Info:{
    height: 90,
    alignItems: 'flexstart',
    backgroundColor: '#feffcd',
    flexDirection: 'column',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },

  rightSide:{
    backgroundColor: '#b5d4ff'
  }



});