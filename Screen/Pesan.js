import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StylePesan';

const Pesan = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.titleAlamat}>Alamat Pengiriman</Text>
                <View style = {styles.borderAlamat}>
                    <Text style = {styles.isiAlamat}>Pantai Idola, Tambak & Sawah, Banyutowo, Dukuhseti, Kabupaten Pati, Jawa Tengah</Text>
                </View>
                <Text style = {styles.titleBarang}>Barang Yang Dipesan</Text>
                <View style = {styles.borderBarang}>
                    <View style = {styles.isiBarangContainer}>
                        <View>
                            <Text style = {styles.nama}>Ikan Nila</Text>
                            <Text style = {styles.jumlah}>1 barang</Text>
                        </View>
                        <Text style = {styles.nama}>Rp. 30.000,-</Text>
                    </View>
                    <View style = {styles.isiBarangContainer}>
                        <View>
                            <Text style = {styles.nama}>Ongkos Kirim</Text>
                        </View>
                        <Text style = {styles.nama}>Rp. 0,-</Text>
                    </View>
                    <View style = {styles.isiBarangContainer}>
                        <View>
                            <Text style = {styles.nama}>Diskon</Text>
                        </View>
                        <Text style = {styles.nama}>Rp. 0,-</Text>
                    </View>
                    <View style = {styles.list}></View>
                    <View style = {styles.isiBarangContainer}>
                        <View>
                            <Text style = {styles.nama}>Total Pembayaran</Text>
                            <Text style = {styles.nama}>(Dibayar Saat Diantar)</Text>
                        </View>
                        <Text style = {styles.nama}>Rp. 30.000,-</Text>
                    </View>
                </View>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Text style = {styles.pesan} onPress = {() =>
                            navigation.navigate('Pesan Sukses')
                        }>Pesan</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Pesan;