import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const PembeliItem = ({ harga }) => {
  return (
    <>
      <TouchableHighlight onPress={() => {}}>
        <View style={styles.cell}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/ikon.jpg")}
            />
          </View>
          <View>
            <Text style={styles.pembeli}>Aris Jember</Text>
            <Text style={styles.nominal}>Rp{harga}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={{ height: 4, backgroundColor: "white" }} />
    </>
  );
};

export default PembeliItem;

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    backgroundColor: "#E6E6FA",
    // marginTop: 5,
    padding: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 20,
  },
  pembeli: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: "#4169E1",
  },

  nominal: {
    marginTop: 8,
    marginLeft: 20,
    fontSize: 12,
    color: "#4169E1",
  },
});
