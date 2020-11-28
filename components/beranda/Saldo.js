import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Saldo = ({ saldo }) => {
  return (
    <View style={styles.cardMain}>
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
    marginVertical: 10,
    marginBottom: 2,
    backgroundColor: "#4169E1",
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
