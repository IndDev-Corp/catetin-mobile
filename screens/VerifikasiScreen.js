import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'white',
  },
  header: {
    padding: 5,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  back: {
    flex:1,
    marginTop: 13,
    width: 2,
    height: 15
  },
  verif: {
    flex: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
    marginTop: 8
  },
  content: {
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10
  },
  instruksi: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: 500,
    color: 'blue'
  },
  input: {
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  kode: {
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  timer: {
    flex: 3,
    textAlign: 'right',
    fontSize: 12,
    color: 'blue',
    fontWeight: 600,
    paddingHorizontal: 10
  },
  noKode: {
    flex: 3,
    textAlign: 'left',
    fontSize: 12,
    color: 'blue',
    fontWeight: 600,
    paddingHorizontal: 5
  },
  inputKode: {
    height: 40,
    borderColor: 'gray',
    marginHorizontal: 5,
    borderBottomWidth: 2,
    textAlign: 'center',
    borderBottomColor: 'blue',
    fontSize: 20,
    fontWeight: 700
  },
  cardBtn: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 7,
    paddingHorizontal: 35,
    borderRadius: 50,
  },
  textBtn: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});

const VerifikasiScreen = ()=> {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.back} source={require("./../assets/intro/back.png")}/>
        <Text style={styles.verif}>Verifikasi</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instruksi}>Catetin sudah mengirim kode verifikasi ke nomer WA kamu. Masukkan kode tersebut ke kolom di bawah ini </Text>
      </View>
      <View style={styles.input}>
        <View style={{ flex: 1,}}>
          <TextInput
          style={styles.inputKode}
          onChangeText={text => onChangeText(text)}
          value={value}
          />
        </View>
        <View style={{ flex: 1,}}>
          <TextInput
          style={styles.inputKode}
          value={value}
          />
        </View>
        <View style={{ flex: 1,}}>
          <TextInput
          style={styles.inputKode}
          value={value}
          />
        </View>
        <View style={{ flex: 1,}}>
          <TextInput
          style={styles.inputKode}
          value={value}
          />
        </View>
      </View>
      <View style={styles.kode}>
        <Text style={styles.timer}>00:57</Text>
        <Text style={styles.noKode}>Tidak menerima kode ?</Text>
      </View>
      <View style={styles.cardBtn}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.textBtn}>Verifikasi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VerifikasiScreen;


