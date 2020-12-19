import * as React from 'react';
import { useState } from "react";
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../Styles/StylePesan';

const Pesan = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);    

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
                <TouchableOpacity  onPress={() => {setModalVisible(true);}}>
                    <View style = {styles.buttonContainer}>
                        <View style = {styles.button}>
                            <Text style = {styles.pesan}>Pesan</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}>
                    <View style = {styless.container}>
                        <View style = {styless.view}>
                            <FontAwesome5 name={'grin-beam'} size={96} color="#C3C9D1"/>
                            <Text style = {styless.judul}>ANDA BERHASIL MELAKUKAN PEMESANAN</Text>
                            <Text style = {styless.keterangan}>Kode pemesanan dapat dilihat pada daftar transaksi di menu akun</Text>
                            <View style = {styless.buttonContainer}>
                                <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                                    <View style = {styless.button}>
                                        <Text style = {styless.textHome}>Home</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {() => navigation.navigate('Akun')}>
                                    <View style = {styless.button}>
                                        <Text style = {styless.textTransaksi}>Daftar Transaksi</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default Pesan;
const styless =StyleSheet.create({
    //Berita
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    view:{
        backgroundColor:'#FFFFFF',
        width: 260,
        height: 365,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
    },
    judul:{
        textAlign: 'center',
        marginTop: 10,
        width:230,
    },
    keterangan:{
        textAlign:'center',
        fontSize: 10,
        width:230,
        color: '#796B6B',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        width: 80,
        height: 50,
        backgroundColor: '#39B7EE',
        borderRadius: 5,
    },
    textHome:{
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 16,
    },
    textTransaksi:{
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 8,
    },
})