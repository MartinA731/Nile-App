import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function OrderDetails() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style ={styles.textContainer}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.Number}>Number</Text>
            <Text style={styles.Carrier}>Carrier</Text>

          </View>

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

                <View style={styles.InfoRow}>
                  <Text style={styles.text}>Arrived</Text>
                  <Text style={styles.text}>Pick Up</Text>

                </View>
            </View>

            <View style={styles.codeContainer}>
                <View style={styles.code}>
                    <MaterialCommunityIcons name="line-scan" size={45} style={styles.icon} />
                </View>

                <View style={styles.code}>
                    <MaterialCommunityIcons name="cursor-text" size={45} style={styles.icon} />
                    
                </View>
            </View>

            <View style ={styles.codeContainer}>
              <Text style={styles.codeText}>Scan Barcode</Text>
              <Text style={styles.codeText}>Input Package Number</Text>

            </View>


        </View>

        <Text>Report a Problem</Text>
        <View style={styles.box}>
          <View style={styles.wrap}>
            <Text style={styles.boldText}>No Other Packages for Ava at:</Text>

          </View>
            
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

  textContainer:{
    margin: 8
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

  InfoRow:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor:'red'
  },

  codeContainer:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop: 8,
    marginBottom: 8
  },


  code: {
    width: "45%",
    height: 55,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#b5d4ff',
  },

  icon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  codeText: { 
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    fontSize: 12,
    color: '#899092',
  },

  wrap:{
    alignItems: 'center',
    justifyContent:'center',
  },

  boldText:{
    fontWeight:'bold',
    fontSize: 15,
  }



});