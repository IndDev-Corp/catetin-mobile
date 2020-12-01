import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import PembeliItem from "../components/beranda/PembeliItem";
import Pembelis from "../components/beranda/Pembelis";
import Saldo from "../components/beranda/Saldo";
import Ripple from "react-native-material-ripple";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
// import { Badge } from "native-base";


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    // padding: 5,
  },
  header: {
  padding:5,
  backgroundColor: '#4169E1',
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  borderBottomWidth: 6,
  borderBottomColor: '#393fb3'
  },
  board: {
    flexDirection: "row",
    paddingVertical: 5
  },
  card1: {
    flex: 1,
    margin: 3,
    borderRadius: 4,
    backgroundColor: "#3CB371",
    paddingHorizontal: 10,
    paddingVertical: 7,
    height: 55,
  },
  nama: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  jumlah: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    flex:3
  },
  cardTrans: {
    margin: 3,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  transDay: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "600",
    color: "#4169E1",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: '#4169E1',
    textAlign: "center",
    margin: 5,
  },
  table: {
    flexDirection: "row",
    marginTop: 5,
  },
  column: {
    flex: 1,
    padding: 12,
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textColumn: {
    fontWeight: 'bold'
  },
  cardBtn: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4169E1",
  },
  textBtn: {
    color: "#4169E1",
    fontWeight: "500",
  },
});

const BerandaScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Saldo saldo={9320} />
          <View style={styles.board}>
            <View style={styles.card1}>
              <Text style={styles.nama}>Produk</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jumlah}>15</Text>
                <FontAwesome name="inbox" size={18} color="white" style={{ marginTop:8, flex: 1 }}  />
              </View>
            </View>
            <View style={[styles.card1, { backgroundColor: "#FF00FF" }]}>
              <Text style={styles.nama}>Pembeli</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jumlah}>120</Text>
                <FontAwesome name="users" size={16} color="white" style={{ marginTop:8, flex: 1 }}  />
              </View>
            </View>
            <View style={[styles.card1, { backgroundColor: "#FFA500" }]}>
              <Text style={styles.nama}>Transaksi</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jumlah}>35x</Text>
                <FontAwesome name="handshake-o" size={18} color="white" style={{ marginTop:8, flex: 1 }} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.transDay}>Transaksi hari ini <FontAwesome name="check" size={12} color="#4169E1" /></Text>
        </View>
        <View style={styles.cardTrans}>
          <View style={styles.table}>
            <TouchableOpacity style={{ flex: 1 }}>
              <View style={[styles.column, { backgroundColor: "#4169E1" }]}>
                <Text style={[ styles.textColumn, { color: "white" }]}>PEMBELI</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <View
                style={[
                  styles.column,
                  { backgroundColor: "white", alignItems: "center", borderWidth: 3, borderColor: '#4169E1' },
                ]}
              >
                <Text style={[ styles.textColumn, { color: "#4169E1" }]}>PRODUK</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Pembelis />

          <View style={styles.cardBtn}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.textBtn}>Lainnya</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BerandaScreen;
