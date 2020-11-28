import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const BerandaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardMain}>
        <Text style={styles.main1}>Saldo</Text>
        <Text style={styles.main2}>Rp15.000</Text>
      </View>
      <View style={styles.board}>
        <View style={styles.card1}>
          <Text style={styles.nama}>Produk</Text>
          <Text style={styles.jumlah}>15</Text>
        </View>
        <View style={[styles.card1, {backgroundColor:'#FF00FF'}]}>
          <Text style={styles.nama}>Pembeli</Text>
          <Text style={styles.jumlah}>120</Text>
        </View>
        <View style={[styles.card1, {backgroundColor:'#FFA500'}]}>
          <Text style={styles.nama}>Transaksi</Text>
          <Text style={styles.jumlah}>35x</Text>
        </View>
      </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.transDay}>Transaksi hari ini</Text>
        </View>
      <View style={styles.cardTrans}>
        <View style={styles.table}>
            <Text style={[styles.column, {backgroundColor:'#4169E1'}]}>PEMBELI</Text>
            <Text style={[styles.column, {backgroundColor:'#white', borderColor:'#4169E1', borderWidth: 2, color: '#4169E1'}]}>PRODUK</Text>
        </View>
        <View style={styles.cell}>
          <View>
            <Image style={styles.image} source={require('../assets/images/ikon.jpg')}/>
          </View>
          <View>
            <Text style={styles.pembeli}>Aris Jember</Text>
            <Text style={styles.nominal}>Rp300.000</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View>
            <Image style={styles.image} source={require('../assets/images/ikon.jpg')}/>
          </View>
          <View>
            <Text style={styles.pembeli}>Aris Jember</Text>
            <Text style={styles.nominal}>Rp300.000</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View>
            <Image style={styles.image} source={require('../assets/images/ikon.jpg')}/>
          </View>
          <View>
            <Text style={styles.pembeli}>Aris Jember</Text>
            <Text style={styles.nominal}>Rp300.000</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View>
            <Image style={styles.image} source={require('../assets/images/ikon.jpg')}/>
          </View>
          <View>
            <Text style={styles.pembeli}>Aris Jember</Text>
            <Text style={styles.nominal}>Rp300.000</Text>
          </View>
        </View>
        <View style={styles.cardBtn}>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.textBtn}>Lainnya</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  cardMain: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginHorizontal:3,
    marginVertical:10,
    marginBottom: 2,
    backgroundColor: '#4169E1',
    flexDirection: 'row'
  },
  main1: {
    flex: 1,
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
  },
  main2: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    textAlign: 'right'
  },
  board: {
    flexDirection: 'row',
  },
  card1: {
    flex: 1,
    margin: 3,
    borderRadius: 4,
    backgroundColor: '#3CB371',
    paddingHorizontal:10,
    paddingVertical: 7,
    height:55,
  },
  nama: {
    color: 'white',
    fontSize: 12,
    fontWeight: 500
  },
  jumlah: {
    fontSize: 18,
    fontWeight: 700,
    color: 'white'
  },
  cardTrans: {
    margin:3,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5
  },
  transDay: {
    paddingVertical:3,
    paddingHorizontal:8,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 600,
    color: 'white',
    backgroundColor: '#4169E1',
    textAlign: 'center',
    margin: 5
  },
  table: {
    flexDirection: 'row',
    marginTop: 5
  },
  column: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cell:{
    flexDirection: 'row',
    backgroundColor: '#E6E6FA',
    marginTop: 5,
    padding: 5
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 20
  },
  pembeli: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4169E1'
    
  },
  nominal: {
    marginTop: 8,
    marginLeft: 20,
    fontSize: 12,
    color: '#4169E1'
  },
  cardBtn: {
    marginTop:10, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4169E1'
  },
  textBtn: {
    color: '#4169E1',
    fontWeight: 500
  }
});
export default BerandaScreen;
