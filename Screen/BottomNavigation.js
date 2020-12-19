import * as React from 'react';
import { useState } from "react";
import {Text, View,FlatList,SafeAreaView,Image,TextInput,TouchableOpacity, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import home from '../Styles/StyleHome';
import ob from '../Styles/StyleObjekWisata';
import akun from '../Styles/StyleAkun';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const DATA = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: "4 Desember 2020",
        description:              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: "4 Desember 2020",
        description:              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        id: "3",
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: "4 Desember 2020",
        description:              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
];

const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={home.beritaContainer}>
            <View style={home.bgBerita}>
                <Image
                    style = {home.imageBerita}
                    source={require('../Assets/idola.png')}/>
                <View style={home.keterangan}>
                    <Text style={home.namaBerita}>{item.title}</Text>
                    <Text style={home.tanggalBerita}>{item.date}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const Home = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
        <Item
            item={item}
            // onPress={() => setSelectedId(item.id)}
            onPress = {() =>
                navigation.navigate('Detail Berita')
            }
        />
        );
    };

    return(
        <ScrollView>
            <View style={home.cuacaContainer}>
                <View style={home.bgCuaca}>
                    <View style={home.itemCuaca}>
                        <Text style={home.tempat}>Desa Banyutowo, Pati</Text>
                        <Text style={home.tanggal}>19 Desember 2020</Text>
                        <FontAwesome5 name={'sun'} size={40} color="#FFFFFF"/>
                        <Text style={home.tanggal}>Cerah</Text>
                    </View>
                    <Text style={home.suhu}>30°</Text>
                </View>
            </View>
            <Text style={home.title}>Rekomendasi Wisata</Text>
            <View style={home.wisataContainer}>
                <View style={home.bgWisata}>
                    <Image
                        style = {home.image}
                        source={require('../Assets/pantai.png')}/>
                    <Text style={home.namaWisata}>Pantai Idola</Text>
                    <TouchableOpacity onPress = {() => navigation.navigate('Detail Objek Wisata')}>
                        <FontAwesome5 name={'chevron-right'} size={30} color="#000000" style={home.next}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={home.title}>Berita Terbaru</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </ScrollView>
    ) 
}

const OB = [
    {
        id: "1",
        title: "Pantai Idola",
        time: "08.00 - 16.00",
        description: 'Merupakan objek wisata yang terdisi dari beberapa wahana dan restoran khas daerah lokal.',
    },
    {
        id: "2",
        title: "Pelabuhan Banyutowo",
        time: "08.00 - 16.00",
        description: 'Merupakan objek wisata yang terdisi dari beberapa wahana dan restoran khas daerah lokal.',
    },
];

const OBItem = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={ob.container}>
            <View style={ob.bgItem}>
                <Image
                    style = {ob.image}
                    source={require('../Assets/pantai.png')}/>
                <Text style={ob.title}>{item.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const ObjekWisata = ()=>{
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = React.useState(null);
    const renderItem = ({ item }) => {
        return (
            <OBItem
                item={item}
                // onPress={() => setSelectedId(item.id)}
                onPress = {() =>
                    navigation.navigate('Detail Objek Wisata')
                }
            />
        );
    };

    return(
        <View>
            <View style={ob.header}>
                <Text style={ob.headerTitle}>Objek Wisata</Text>
            </View>
            <FlatList
                data={OB}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    )
}

const Transaksi = [
    {
        id: "1",
        title: "Reservasi Penginapan A",
        kode: "RP001",
        tanggal: "04 Desember 2020",
        waktu: "15.00",
        status: "Sedang Diproses",
    },
    {
        id: "2",
        title: "Pembelian Ikan Nila",
        kode: "IK001",
        tanggal: "04 Desember 2020",
        waktu: "12.00",
        status: "Sedang Disiapkan",
    },
];

const TransaksiItem = ({ item, onPress}) => (
        <View>
            <Text style={akun.transaksiTitle}>{item.title}</Text>
            <View style={akun.keteranganContainer}>
                <View style={akun.judulKeterangan}>
                    <Text style={akun.transaksiItem}>Kode</Text>
                    <Text style={akun.transaksiItem}>Tanggal Reservasi</Text>
                    <Text style={akun.transaksiItem}>Waktu Reservasi</Text>
                    <Text style={akun.transaksiItem}>Status</Text>
                </View>
                <View style={akun.isiKeterangan}>
                    <Text style={akun.transaksiItem}>: {item.kode}</Text>
                    <Text style={akun.transaksiItem}>: {item.tanggal}</Text>
                    <Text style={akun.transaksiItem}>: {item.waktu}</Text>
                    <Text style={akun.transaksiItem}>: {item.status}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={akun.bgButton}>
                    <Text style={akun.btn}>Detail Tansaksi</Text>
                </View>
            </TouchableOpacity>
            <View style={akun.bgList}>
                
            </View>
        </View>
);

const Akun = ()=>{
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);    
    const [selectedId, setSelectedId] = React.useState(null);
    const renderItem = ({ item }) => {
        return (
            <TransaksiItem
                item={item}
                // onPress={() => setSelectedId(item.id)}
                onPress = {() =>
                    navigation.navigate('Detail Transaksi')
                }
            />
        );
    };
    return(
        <ScrollView>
            <View style={akun.header}>
                <View style={akun.itemHeader}>
                    <Text style={akun.headerTitle}>Akun</Text>
                    <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                        <FontAwesome5 style={akun.headerIcon} name={'bars'} size={30} color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={akun.container}>
                <View style={akun.profile}>
                    <Image
                        style = {akun.profileImage}
                        source={require('../Assets/idola.png')}/>
                    <View style={akun.profileName}>
                        <Text style={akun.name}>Story</Text>
                        <Text style={akun.email}>story@gmail.com</Text>
                    </View>
                </View>
                <View style={akun.transaksiContainer}>
                    <Text style={akun.daftarTransaksi}>Daftar Transaksi</Text>
                    <FlatList
                        data={Transaksi}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={akun.modal}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                        <Text style={akun.logout}>Logout <FontAwesome5 style={akun.logoutIcon} name={'sign-out-alt'} size={20} color="#FFFFFF"/>
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    )
}

export{Home, ObjekWisata, Akun}