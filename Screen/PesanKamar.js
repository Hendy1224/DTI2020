import React, { useState } from "react";
import { Text, View, Image,ScrollView, TouchableOpacity, TextInput, Modal} from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import pesanKamar from '../Styles/StylePesanKamar';

const PesanKamar = () => {
    const [modalVisible, setModalVisible] = useState(false);    
    const navigation = useNavigation();
    const [nama, onNama] = React.useState(' ');
    const [nomor, onNomor] = React.useState(' ');
    const [mulai, onMulai] = React.useState(' ');
    const [selesai, onSelesai] = React.useState(' ');

    return (
        <ScrollView style={pesanKamar.bg}>
            <View style={pesanKamar.container}>
                <View style={pesanKamar.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('PenginapanDetail')}>
                        <Image source={require('../Assets/Penginapan/arrow-black.png')} />
                    </TouchableOpacity>
                    <Text style={pesanKamar.sub}>Reservasi Penginapan A</Text>
                </View>
                <View style={pesanKamar.container2}>
                    <Text style={pesanKamar.title}>Informasi Lengkap</Text>
                    <View style={pesanKamar.info}>
                        <Text style={pesanKamar.fontLabel}>Nama pemesan </Text>
                        <TextInput style = {pesanKamar.textInput}
                            onNama={text => onNama(nama)} />
                        <Text style={pesanKamar.fontLabel}>Nomor yang bisa dihubungi</Text>
                        <TextInput style = {pesanKamar.textInput}
                            onNomor={text => onNomor(nomor)} />
                        <Text style={pesanKamar.fontLabel}>Tanggal reservasi</Text>
                        <View style={pesanKamar.rowDate}>
                            <TextInput style = {pesanKamar.textInputDate}
                                onMulai={text => onMulai(mulai)}
                                placeholder='04/12/2020'/>
                            <Text style={{marginTop:5}}>sampai</Text>
                            <TextInput style = {pesanKamar.textInputDate}
                                onSelesai={text => onSelesai(selesai)}
                                placeholder='05/12/2020'/>
                        </View>
                        <Text style={pesanKamar.fontLabel}>Saya yang bertamu</Text>
                        <Text style={{fontFamily: 'Open Sans',fontSize: 14, paddingTop: 2}}>Saya memesan untuk orang lain</Text>
                    </View>
                    <Text style={pesanKamar.title}>Detail Harga</Text>
                    <View style={pesanKamar.info}>
                        <View style={pesanKamar.row}>
                            <Text style={pesanKamar.fontHarga}>1 Kamar A (1 malam)</Text>
                            <Text style={pesanKamar.fontHarga2}>Rp. 150.000,-</Text>
                        </View>
                        <View style={pesanKamar.row}>
                            <Text style={pesanKamar.fontHarga}>Pajak</Text>
                            <Text style={pesanKamar.fontHarga2}>Rp. 0,-</Text>
                        </View>
                        <View style={pesanKamar.row}>
                            <Text style={pesanKamar.fontHarga}>Diskon</Text>
                            <Text style={pesanKamar.fontHarga2}>Rp. 0,-</Text>
                        </View>
                        <View style={{ borderBottomColor: 'rgba(166, 154, 154, 0.4)', borderBottomWidth: 1, paddingVertical: 4 }} />
                        <View style={pesanKamar.row}>
                            <View>
                                <Text style={pesanKamar.fontHarga}>Total pembayaran</Text>
                                <Text style={pesanKamar.fontHarga}>(Dibayar saat Check-in)</Text>
                            </View>
                            <Text style={pesanKamar.fontHarga2}>Rp. 150.000,-</Text>
                        </View>
                    </View>
                    <TouchableOpacity  onPress={() => {setModalVisible(true);}}>
                            <View style={pesanKamar.buttonStyle}>
                            <Text style={pesanKamar.pesanStyle}>Pesan</Text>
                            </View>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}>
                        <View style={pesanKamar.centeredView2}>
                            <View style={pesanKamar.modalView}>
                                <Image style={pesanKamar.imageSmile} source={require('../Assets/Penginapan/smile.png')} />
                                <Text style={pesanKamar.textStyle}>ANDA BERHASIL MELAKUKAN PEMESANAN</Text>  
                                <Text style={pesanKamar.textStyle2}>Kode pemesanan dapat dilihat pada daftar transaksi di menu akun</Text>
                                <View style={pesanKamar.row}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                        <View style={pesanKamar.buttonStyle2}>
                                            <Text style={pesanKamar.pesanStyle3}>Home</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('PenginapanDetail')}>
                                        <View style={pesanKamar.buttonStyle2}>
                                            <Text style={pesanKamar.pesanStyle2}>Daftar Transaksi</Text>
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
};

export default PesanKamar;