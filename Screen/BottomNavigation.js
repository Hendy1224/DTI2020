import * as React from 'react';
import {Text, View,FlatList,SafeAreaView,Image,TextInput,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import home from '../Styles/StyleHome';
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
                    <FontAwesome5 name={'chevron-right'} size={30} color="#000000" style={home.next}/>
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

const ObjekWisata = ()=>{
    const navigation = useNavigation();

    return(
        <Text onPress = {() =>
            navigation.navigate('Bahan dan Olahan Lokal')
        }>
            Bahan dan Olahan Lokal
        </Text>
    )
}

const Akun = ()=>{
    return(
        <Text>
            Akun Screen
        </Text>
    )
}

export{Home, ObjekWisata, Akun}