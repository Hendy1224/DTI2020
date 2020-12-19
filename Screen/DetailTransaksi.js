import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StyleDetailTransaksi';

const Pesan = () => {
    const navigation = useNavigation();

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
                    <TouchableOpacity onPress = {() => navigation.navigate('Ulasan')}>
                        <View style={styles.bgButton}>
                            <Text style={styles.btn}>Berikan Ulasan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Pesan;