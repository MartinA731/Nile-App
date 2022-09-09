import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function OrderDetails() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.Number}>Number</Text>
            <Text style={styles.Carrier}>Carrier</Text>

            <View style={styles.update}>
                <View style={styles.step1}/>
            </View>
            
            

        </View>
    
        


      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

  box1: {
    borderWidth: 4,
    borderRadius: 8

  },

  Name:{
    fontSize: 24,
    marginBottom: 10
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
      

  },

  step1:{
    width: 30, 
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "red",
  }

});