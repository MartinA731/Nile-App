// import React, { useState, useEffect } from "react";
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
// // Accessing information
// // Single user : http://localhost:3001/users/user2@gmail.com
// // All users : http://localhost:3001/users/users


// export default function Data() {
//     const [list, setList] = useState(true);
//     const [card, setCard] = useState(false);
//     const [players, setPlayers] = useState([]);
//     const [player, setPlayer] = useState({});
    
//     console.log("HERE NOW")
//     useEffect(() => {
//     try {
//       fetch("http://localhost:3001/users/users")
//         .then((response) => response.json())
//         .then((responseJson) => {
//         console.log("we are here");
//         setPlayers(responseJson.data);
//         setPlayers([33]);
//         });
//     }
//     catch {
//       setPlayers([21]);
//       console.log("failed");
//     }
//    }, [] )
    
//     // }, []);
    
//     console.log("hi bitch")
//     console.log(players)
    
//     // const Item = ({ email }) => (
//     //     <View style={styles.item}>
//     //       <Text style={styles.email}>{email}</Text>
//     //     </View>
//     //   );

//     // const renderItem = ({ item }) => (
//     //     <Item title={item.email} />
//     // );

//     // <SafeAreaView style={styles.container}>
//     //         <FlatList
//     //             data={players}
//     //             renderItem={renderItem}
//     //             keyExtractor={item => item.email}
//     //         />
//     // </SafeAreaView>

//     console.log("Hi mffer")
//     return (
//         <View>
//             <Text>TESTERBITCCLK:DSJFFJFJFJJFJFJFJJFJFJJFJFJ</Text>
//         </View>
//       );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//       backgroundColor: '#f9c2ff',
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//     },
//     title: {
//       fontSize: 32,
//     },
//   });


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import Constants from 'expo-constants';
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost
  .split(`:`)
  .shift()
  .concat(`:3001`)}/users/users`;

export default App = () => {
  const [U, setU] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((json) => setU(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(U);
  console.log(U.data);
  console.log("hi")

  return (

    <View>
      <Text></Text>
    </View>
  );
};
