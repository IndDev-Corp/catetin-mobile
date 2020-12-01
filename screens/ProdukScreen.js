import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export class ProdukScreen extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <ScrollView>
                {/* Pencarian */}
                <View style={{ marginTop: 20 }}>
                    <SearchBar placeholder="Pencarian"
                        onChangeText={this.updateSearch}
                        value={search} />
                </View>
                {/* Kategori */}
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.containerKategoriAll}>
                        <TouchableHighlight style={styles.touchableKategoriAll} onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategoriAll}>
                                <Text style={styles.textKategoriAll}>Semua</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.containerKategori}>
                        <TouchableHighlight style={styles.touchableKategori} onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategori}>
                                <FontAwesome5 name="hamburger" size={36} color="black" />
                                <Text style={styles.textKategori}>Makanan</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.containerKategori}>
                        <TouchableHighlight style={styles.touchableKategori} onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategori}>
                                <FontAwesome5 name="chair" size={36} color="black" />
                                <Text style={styles.textKategori}>Perabotan</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                {/* Produk */}
                <View style={{ marginTop: 20 }}>
                    <View style={styles.containerProduk}>
                        <TouchableHighlight style={styles.touchableProduk} onPress={() => Alert.alert('Simple')}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.imageProduk}>
                                    <FontAwesome5 name="hamburger" size={36} color="black" />
                                </View>
                                <View style={styles.buttonProduk}>
                                    <Text style={styles.textProduk}>Martabak</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.containerProduk}>
                        <TouchableHighlight style={styles.touchableProduk} onPress={() => Alert.alert('Simple')}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.imageProduk}>
                                    <FontAwesome5 name="hamburger" size={36} color="black" />
                                </View>
                                <View style={styles.buttonProduk}>
                                    <Text style={styles.textProduk}>Telur Gulung</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.containerProduk}>
                        <TouchableHighlight style={styles.touchableProduk} onPress={() => Alert.alert('Simple')}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.imageProduk}>
                                    <FontAwesome5 name="hamburger" size={36} color="black" />
                                </View>
                                <View style={styles.buttonProduk}>
                                    <Text style={styles.textProduk}>Cilok</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    containerKategoriAll: {
        width: 100,
        marginLeft: 20,
    },
    touchableKategoriAll: {
        borderRadius: 15,
    },
    buttonKategoriAll: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        height: 150,
        borderRadius: 15,
    },
    textKategoriAll: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    containerKategori: {
        width: 100,
        marginLeft: 15,
    },
    touchableKategori: {
        borderRadius: 15,
    },
    buttonKategori: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        height: 100,
        borderRadius: 15,
    },
    textKategori: {
        fontSize: 16,
        fontWeight: "bold",
    },

    containerProduk: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    touchableProduk: {
        borderRadius: 5
    },
    buttonProduk: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        height: 120,
        flex: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
    },
    textProduk: {
        fontSize: 20,
        fontWeight: "bold",
    },
    imageProduk: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 120,
        backgroundColor: '#fff',
        zIndex: 10,
        flex: 0.5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
    }
});

export default ProdukScreen
