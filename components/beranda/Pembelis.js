import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PembeliItem from "./PembeliItem";

const Pembelis = () => {
  const data = [1, 2, 3, 4, 5, 9, 43, 43, 43, 43, 43, 43, 43, 4343, 43, 43, 43];
  return data.map((item, index) => {
    return <PembeliItem key={index} harga={item} />;
  });
};

export default Pembelis;

const styles = StyleSheet.create({});
