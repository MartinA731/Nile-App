import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function OrderDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.box}>
          <View style={styles.textContainer}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.Number}>Number</Text>
            <Text style={styles.Carrier}>Carrier</Text>

          </View>

          <View style={styles.update}>
            <View style={styles.circle}>

              <View style={styles.step}>
                <Text style={styles.text}>1</Text>
              </View>
              <Text>Arrival</Text>

            </View>

            <View style={styles.bar} />

            <View style={styles.circle}>
              <View style={styles.step}>
                <Text style={styles.text}>2</Text>
              </View>
              <Text>Pick UP</Text>

            </View>
          </View>

          <View style={styles.Info}>
            <Text style={styles.boldText}>Awaiting Arrival</Text>
            <Text style={styles.gray}>Expected Arrival:</Text>

            <View style={styles.InfoRow}>
              <View style={styles.Arrived}>
                <Text style={styles.text}>Arrived</Text>
                <Text style={styles.text}>--/--/--</Text>

              </View>

              <View style={styles.PickUp}>
                <Text style={styles.text}>Pick Up</Text>
                <Text style={styles.text}>--/--/--</Text>
              </View>
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

          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>Scan Barcode</Text>
            <Text style={styles.codeText}>Input Package Number</Text>

          </View>


        </View>

        <Text style={styles.grayText}>Report a Problem</Text>

        {/* If no more packages */}
        <View style={styles.box}>
          <View style={styles.wrap}>
            <Text style={styles.boldText}>No Other Packages for Ava at:</Text>
            <Text style={styles.normalText}>Startbucks 425 S Carg. St</Text>
          </View>

        </View>

        {/* If more packages */}
        <View style={styles.box}>
          <View style={styles.codeContainer}>
            <View style={styles.code}>
              <MaterialCommunityIcons name="line-scan" size={45} style={styles.icon} />
            </View>

            <View style={styles.code}>
              <MaterialCommunityIcons name="cursor-text" size={45} style={styles.icon} />

            </View>
          </View>


          <View style={styles.greenBox}>
            <Text style={styles.gray}>(2) Package Awaiting Pick Up</Text>
            <View style={styles.InfoG}>
              <Text style={styles.text}>Amazon (#RH766494739CN)</Text>
              <Text style={styles.boldText}>Arrived: 3/2/2022</Text>

              <View style={styles.InfoRow}>


              </View>
            </View>

          </View>

          <View style={styles.yellowBox}>
            <Text style={styles.gray}>(1) Package Awaiting Arrival</Text>
            <View style={styles.InfoY}>
              <Text style={styles.text}>UPS (#RH766494739CN)</Text>
              <Text style={styles.boldText}>Expected Arrival: 3/12/2022</Text>

              <View style={styles.InfoRow}>


              </View>
            </View>

          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>

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
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#C3CBCD'
  },

  textContainer: {
    margin: 8
  },

  Name: {
    fontSize: 24,
    marginBottom: 10,
    textDecorationLine: 'underline'
  },

  Number: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  Carrier: {
    fontSize: 24,
    marginBottom: 10
  },

  update: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    textAlign: 'center'
  },

  step: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#94FC92',
    display: 'flex',
    textAlign:'justify'
  },

  text: {
    textAlign: 'center',
    alignItems: 'center',
    top: 6
  },

  bar: {
    width: '15%',
    height: '7%',
    top: -8,
    backgroundColor: '#737B7D'
  },

  Info: {
    alignItems: 'flexstart',
    backgroundColor: '#feffcd',
    flexDirection: 'column',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },

  InfoRow: {
    position:'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: 12,
    color: '#899092',
  },

  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  normalText: {
    fontStyle: 'normal',
  },

  grayText: {
    color: '#737B7D',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  gray: {
    color: '#737B7D',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  circle: {
    alignItems: 'center',
    textAlign: 'center'
  },

  InfoG: {
    height: 90,
    alignItems: 'flexstart',
    backgroundColor: '#EAFFDA',
    flexDirection: 'column',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#DBFFBF',
    margin: 8,
    padding: 8,
    marginTop: 10,
  },

  InfoY: {
    height: 90,
    alignItems: 'flexstart',
    backgroundColor: '#FEFFCD',
    flexDirection: 'column',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#FDFF8B',
    margin: 8,
    padding: 8,
    marginTop: 10,
  },



});