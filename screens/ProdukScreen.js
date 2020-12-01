import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { SearchBar } from 'react-native-elements'

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
            <View>
                <View style={{ marginTop:20 }}>
                    <SearchBar placeholder="Pencarian"
                    onChangeText={this.updateSearch}
                    value={search}/>
                </View>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center"}}>
                    <View style={styles.containerKategoriAll}>
                        <TouchableHighlight onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategoriAll}>
                            <Text style={styles.textKategoriAll}>All</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.containerKategori}>
                        <TouchableHighlight onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategori}>
                            <Text style={styles.textKategori}>All</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.containerKategori}>
                        <TouchableHighlight onPress={() => Alert.alert('Simple')}>
                            <View style={styles.buttonKategori}>
                            <Text style={styles.textKategori}>All</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerKategoriAll: {
        width: 100,
        marginLeft: 20,
    },
    buttonKategoriAll: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        height: 150,
    },
    textKategoriAll: {
        fontSize: 24,
        fontWeight: "bold",
    },
    containerKategori: {
        width: 100,
        marginLeft: 15,
    },
    buttonKategori: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        height: 100,
    },
    textKategori: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default ProdukScreen
