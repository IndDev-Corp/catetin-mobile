import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

// export default class LainnyaScreen extends Component {
//   state = {
//     nama: "Hello world",
//   };

//   klik() {
//     alert("halo");
//   }

// function setNama(nama) {
//     this.setState({
//         nama:nama
//     })
// }

//   render() {
//     return (
//       <View style={{ marginTop: 20 }}>
//         <Text> {this.state.nama} </Text>
//         <Button onPress={this.klik} title="Kentok" />
//       </View>
//     );
//   }
// }

// function LainnyaScreen() {
//     return (
//       <View style={{ marginTop: 20 }}>
//         <Text> {this.state.nama} </Text>
//         <Button onPress={this.klik} title="Kentok" />
//       </View>
//     );
// }

const LainnyaScreen = () => {
  const [nama, setNama] = useState("Hello world");

  function klik() {
    alert("halo");
    setNama("hello");
  }

  function klik2(nama) {
    setNama(nama);
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text> {nama} </Text>
      <Button onPress={klik} title="Kentok" />
      <Button onPress={klik2} title="Kentok" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LainnyaScreen;
