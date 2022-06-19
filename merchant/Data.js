import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';

//http://localhost:3001/merchants/user2@gmail.com
//CHANGE THIS WHEN REGISTRATION + LOGIN DONE
const curUser = "user2@gmail.com"

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost
  .split(`:`)
  .shift()
  .concat(`:3001`)}/merchants/` + curUser;


export default function App() {
  const [U, setU] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((json) => setU(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function showFlatList() {
    if(!isLoading) {
      return (
      <View style={styles.container}>
        <FlatList
          data={U.data.clients}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
              <Text style={styles.listItemDate}>{item.date}</Text>
              <Text style={styles.listItemCode}>{item.pickupID}</Text>
            </View>
          )}
        />
      </View> 
      ); }
    return <Text> NOTHING</Text>
  }
  

  return (
    showFlatList()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    marginLeft: 8,
    marginRight: 8,
  },

  listItem: {
    width: '100%',
    height: 90,
    alignItems: 'flexstart',
    backgroundColor: '#feffcd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: 10,
  },

  listItemText: {
    margin: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },

  listItemDate: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  listItemCode: {
    position: 'absolute',
    top: 35,
    margin: 15,
    fontSize: 24,
  }
});