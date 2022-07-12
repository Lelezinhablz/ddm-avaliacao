import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
} from "react-native";
import { auth, firestore } from "../firebase";
import MeuEstilo from "../meuestilo";

const Listar = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [instrumentos, setInstrumentos] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("Instrumento")
      .onSnapshot((querySnapshot) => {
        const instrumentos = [];
        querySnapshot.forEach((documentSnapshot) => {
          instrumentos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.instrument,
          });
        });
        setInstrumentos(instrumentos);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Item = ({ instrument }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>{instrument}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item instrument={item.instrument} />;
  // const getInstrumentos= ()=>{
  //   setInstrumentos([]);
  //   firestore
  //   .collection('Instrumento')
  //   .onSnapshot(querySnapshot=>{
  //     //querySnapshot.forEach(documentSnapshot=>{
  //     querySnapshot.docChanges().forEach(change=>{

  //       instrumentos.push({...change.doc.data(),
  //         key: change.instrument,
  //       });
  //     });
  //     setInstrumentos(instrumentos);
  //     // setCarregando(false);
  //   });
  //   // return()=>subscriber();
  // };

  // // const observador = firestore.collection('Instrumento')
  // // .onSnapshot(querySnapshot => {
  // //   querySnapshot.docChanges().forEach(change => {
  // //     if (change.type === 'added') {
  // //       console.log('Novo Instrumento: ', change.doc.data());
  // //     }
  // //     if (change.type === 'modified') {
  // //       console.log('Instrumento modificado: ', change.doc.data());
  // //     }
  // //     if (change.type === 'removed') {
  // //       console.log('Instrumento removido: ', change.doc.data());
  // //     }
  // //   });
  // // });

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={instrumentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.instrument}
        // refreshing={true}
        // onRefresh={() => {
        //   getInstrumentos();
        // }}
      />
    </SafeAreaView>
  );
};

// const MeuEstilo = MeuEstiloheet.create({
//   containerlistar: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#0782F9',
//     fontWeight: '700',
//   },
// });

export default Listar;
