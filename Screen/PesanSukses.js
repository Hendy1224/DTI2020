import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PesanSukses = () => {
    const navigation = useNavigation();
    return(
        <View style = {styless.container}>
            <View style = {styless.view}>
                <FontAwesome5 name={'grin-beam'} size={96} color="#C3C9D1"/>
                <Text style = {styless.judul}>ANDA BERHASIL MELAKUKAN PEMESANAN</Text>
                <Text style = {styless.keterangan}>Kode pemesanan dapat dilihat pada daftar transaksi di menu akun</Text>
                <View style = {styless.buttonContainer}>
                    <View style = {styless.button}>
                        <Text style = {styless.textHome} onPress = {() =>
                        navigation.navigate('Home')
                    } >Home</Text>
                    </View>
                    <View style = {styless.button}>
                        <Text style = {styless.textTransaksi}>Daftar Transaksi</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PesanSukses;

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