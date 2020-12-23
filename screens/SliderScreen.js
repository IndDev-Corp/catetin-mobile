import React from "react";
import { Text, TouchableOpacity, View, StyleSheet,
  Image, } from "react-native";
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: "white",
    padding: 5,
  },
  main: {
    marginTop: 10,
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
export default class SliderScreen extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {''}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                          <View style={styles.container}>
                            <Text style={styles.main}>Kenalin Catetin</Text>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                              <Image style={styles.image} source={require("./../assets/intro/imageA.png")}/>
                            </View>
                              <Text style={styles.desc}>
                              "Partner setia bisnismu, dengan Catetin pencatatan transaksi harian kamu makin efektif dan mudah"
                              </Text>
                            <View style={styles.cardBtn}>
                              <View style={{flex:2}}>
                              <Text></Text>
                              </View>
                              <TouchableOpacity style={{flex: 1}}>
                                <View style={styles.btnStart}>
                                  <Text style={styles.textBtn}>Mulai</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                          <View style={styles.container}>
                            <Text style={styles.main}>Mudah Dipakai</Text>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                              <Image style={styles.image} source={require("./../assets/intro/imageC.png")}/>
                            </View>
                              <Text style={styles.desc}>
                              Dengan Catetin pencatatan transaksi, hutang, bisnis dan lain-lainnya semakin mudah 
                              </Text>
                            <View style={styles.cardBtn}>
                              <View style={{flex:2}}>
                              <Text></Text>
                              </View>
                              <TouchableOpacity style={{flex: 1}}>
                                <View style={styles.btnStart}>
                                  <Text style={styles.textBtn}>Mulai</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                          <View style={styles.container}>
                            <Text style={styles.main}>Fakta Mencatat</Text>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                              <Image style={styles.image} source={require("./../assets/intro/imageB.png")}/>
                            </View>
                              <Text style={styles.desc}>
                              Percaya gak sih, kalau dengan mencatat semakin mempermudah kita untuk berbisnis dan bertransaksi 
                              </Text>
                            <View style={styles.cardBtn}>
                              <View style={{flex:2}}>
                              <Text></Text>
                              </View>
                              <TouchableOpacity style={{flex: 1}}>
                                <View style={styles.btnStart}>
                                  <Text style={styles.textBtn}>Mulai</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                      </View>
                  </Swiper>
              </View>
              
          </View>
        )
    }
}