import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
  },
  logo: {
    width: 208,
    height: 58,
  }
});

const IntroScreen = ()=> {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("./../assets/intro/catetin_logo_slogan.png")}/>
    </View>
  );
}

export default IntroScreen;


