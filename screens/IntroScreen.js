import React from "react";

import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "white",
    padding: 5,
  },
  main: {
    marginTop: 50,
    marginBottom: 35,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700
  },
  image: {
    height: 200,
    width: 100,
    // borderRadius: 25,
    // marginLeft: 20,
  },
  desc: {
    textAlign: "center",
    marginVertical: 25,
    color: "blue",
    fontSize: 14,
    marginHorizontal: 20,
    fontWeight: 500
  },
  btnStart: {
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: "purple",
    borderRadius: 50,
    marginHorizontal: 5
  },
  cardBtn: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textBtn: {
    color: "white",
    fontWeight: 600,
  }
});

const IntroScreen = ()=> {
  return(
    <View style={styles.container}>
      <Text style={styles.main}>Mudah Dipakai</Text>
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image style={styles.image} source={require("./../assets/intro/imageC.png")}/>
      </View>
        <Text style={styles.desc}>
        This works, thank you very much. It's surprising to me that there is not a build in method for accomplishing this. I guess RN is still pretty new. 
        </Text>
      <View style={styles.cardBtn}>
        <View style={{flex:2}}>
        <Text>slider</Text>
        </View>
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.btnStart}>
            <Text style={styles.textBtn}>Mulai</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;