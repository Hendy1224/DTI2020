import * as React from 'react';
import { useState } from "react";
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../Styles/StyleDetailTransaksi';

const Pesan = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);    
    const [ulasan, onUlasan] = React.useState('');

    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.border}>
                    <Text style = {styles.title}>Reservasi Penginapan A</Text>
                    <View style={styles.keteranganContainer}>
                        <View style={styles.judulKeterangan}>
                            <Text style={styles.transaksiItem}>Kode</Text>
                            <Text style={styles.transaksiItem}>Tanggal Reservasi</Text>
                            <Text style={styles.transaksiItem}>Waktu Reservasi</Text>
                            <Text style={styles.transaksiItem}>Tanggal Pemesanan</Text>
                            <Text style={styles.transaksiItem}>Durasi Reservasi</Text>
                            <Text style={styles.transaksiItem}>Jenis Kamar</Text>
                            <Text style={styles.transaksiItem}>Total Pembayaran</Text>
                            <Text style={styles.transaksiItem}>Status</Text>
                        </View>
                        <View style={styles.isiKeterangan}>
                            <Text style={styles.transaksiItem}>: RP0001</Text>
                            <Text style={styles.transaksiItem}>: 4 Desember 2020</Text>
                            <Text style={styles.transaksiItem}>: 15.00</Text>
                            <Text style={styles.transaksiItem}>: 4 Desember 2020</Text>
                            <Text style={styles.transaksiItem}>: 1 malam</Text>
                            <Text style={styles.transaksiItem}>: Kamar A</Text>
                            <Text style={styles.transaksiItem}>: Rp. 150.000</Text>
                            <Text style={styles.transaksiItem}>: Sedang Diproses</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                        <View style={styles.bgButton}>
                            <Text style={styles.btn}>Berikan Ulasan</Text>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}>
                        <View style = {styless.container}>
                            <View style = {styless.view}>
                                <Text style = {styless.title}>Ulasan</Text>
                                <View style = {styless.star}>
                                    <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                                    <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                                    <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                                    <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                                    <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                                </View>
                                <View style={styless.viewContainer}>
                                    <TextInput 
                                        style = {styless.textInput}
                                        onUlasan={text => onUlasan(text)}
                                        value={ulasan} 
                                    />
                                </View>
                                <View style = {styless.buttonContainer}>
                                    <TouchableOpacity onPress={() => {setModalVisible(false);}}>
                                        <View style = {styless.button}>
                                            <Text style = {styless.textHome}>Kembali</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress = {() => navigation.navigate('Akun')}>
                                        <View style = {styless.button}>
                                            <Text style = {styless.textTransaksi}>Tambah Ulasan</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </ScrollView>
    )
}

export default Pesan;
const styless =StyleSheet.create({
    //Berita
    container: {
        marginTop: '35%',
        marginBottom: '35%',
        alignItems:'center',
    },
    view: {
        backgroundColor: '#FFFFFF',
        width: 265,
        height: 365,
        paddingLeft: 16,
        paddingTop: 32,
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 32,
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginLeft: 26,
        width: 190,
        height: 140,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#C0C0C0',
        backgroundColor: '#D3D3D3',
    },
    textInput: {
        width: 190,
        height: 140,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
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
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 16,
    },
    textTransaksi:{
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 8,
    },
})