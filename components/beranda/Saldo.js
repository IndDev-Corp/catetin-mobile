import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Saldo = ({ saldo }) => {
  return (
    <View style={styles.cardMain}>
      <FontAwesome name="money" size={24} color="white" style={{marginRight:5}} />
      <Text style={styles.main1}>Saldo</Text>
      <Text style={styles.main2}>Rp{saldo}</Text>
    </View>
  );
};

export default Saldo;

const styles = StyleSheet.create({
  cardMain: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginHorizontal: 3,
    marginVertical: 5,
    marginBottom: 2,
    backgroundColor: "#37afde",
    flexDirection: "row",
  },
  main1: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  main2: {
    flex: 1,
    fontSize: 18,
    color: "white",
    textAlign: "right",
  },
});
