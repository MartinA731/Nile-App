import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost
  .split(`:`)
  .shift()
  .concat(`:3001`)}/users/users`;


//testing data
const data = [
  { id: '1', name: 'James', date: '3/9/2022', code: 'RA38990125US' },
  { id: '2', name: 'Ortiz', date: '3/10/2022', code: 'RA38990125US' },
  { id: '3', name: 'Mile', date: '3/9/2022', code: 'RA38990125US' },
  { id: '4', name: 'Thomas', date: '3/9/2022', code: 'RA38990125US' },
  { id: '5', name: 'Alice', date: '3/9/2022', code: 'RA38990125US' },
  { id: '6', name: 'Mallory', date: '8/9/2022', code: 'RA38990125US' }
];




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

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.listItemDate}>{item.date}</Text>
            <Text style={styles.listItemCode}>{item.code}</Text>
          </View>
        )}
      />

    </View>
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