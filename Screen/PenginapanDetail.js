import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import penginapanDetail from '../Styles/StylePenginapanDetail';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: "1",
        title: "Kamar A",
        harga: "150.000",
        detail1: "1 kasur ganda",
        detail2: "1 kamar mandi dalam",
        detail3: "kamar berAC"
    },
    {
        id: "2",
        title: "Kamar A",
        harga: "150.000",
        detail1: "1 kasur ganda",
        detail2: "1 kamar mandi dalam",
        detail3: "kamar berAC"
    },
];

const Item = ({ item, onPress }) => (
    <View style={penginapanDetail.itemKamar}>
        <View style={penginapanDetail.viewItem}>
            <Image source={require('../Assets/Penginapan/Kamar.png')} />
                <View>
                    <View style={penginapanDetail.row}>
                        <Text style={penginapanDetail.kamarTitle}>{item.title}</Text>
                    </View>
                    <Text style={penginapanDetail.kamarDetail}>{item.detail1}</Text>
                    <Text style={penginapanDetail.kamarDetail}>{item.detail2}</Text>
                    <View style={penginapanDetail.row}>
                    <Text style={penginapanDetail.kamarDetail}>{item.detail3}</Text>
                    <View>
                        <Text style={penginapanDetail.kamarHarga}>{item.harga}</Text>
                        <TouchableOpacity onPress={onPress}>
                            <View style={penginapanDetail.buttonStyle}>
                            <Text style={penginapanDetail.pesanStyle}>Pesan</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
        </View>
    </View>
);


const PenginapanDetail = () => {
    const navigation = useNavigation();
    const [selectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() =>
                    navigation.navigate('PesanKamar')
                }
            />
        );
    };

    return (
        <ScrollView style={penginapanDetail.bg}>
            <View style={penginapanDetail.container}>
                <View style={penginapanDetail.viewSub}>
                    <TouchableOpacity onPress={() => navigation.navigate('Penginapan')}>
                        <Image source={require('../Assets/arrow-back.png')} />
                    </TouchableOpacity>
                    <Text style={penginapanDetail.sub}>Penginapan</Text>
                </View>
                <View style={penginapanDetail.containerImage}>
                    <Image style={penginapanDetail.centerImage}
                        source={require('../Assets/Penginapan/kamarBesar.png')} />
                </View>
            </View>
            <View style={penginapanDetail.containerDetail}>
                <Text style={penginapanDetail.itemTitle}>Penginapan A</Text>
                <View style={penginapanDetail.viewLokasi}>
                    <Image source={require('../Assets/Penginapan/lokasi.png')} />
                    <Text style={penginapanDetail.itemLokasi}>Jln. ABC no. 1</Text>
                </View>
                <Text style={penginapanDetail.itemLokasi}>Fasilitas : </Text>
                <Text style={penginapanDetail.itemFasilitas}>AC, Akses Wifi Gratis, Sarapan Pagi Gratis</Text>
                <Text style={penginapanDetail.itemLokasi}>Pilihan Kamar Yang Tersedia :</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
                <View style={penginapanDetail.containerUlasan}>
                    <View style={penginapanDetail.row}>
                        <Text style={penginapanDetail.ulasanTitle}>Ulasan</Text>
                        <Text style={penginapanDetail.ulasanRating}>4/5</Text>
                        <Image style={penginapanDetail.itemStar}
                            source={require('../Assets/Penginapan/star.png')} />
                    </View>
                    <View style={{ borderBottomColor: 'rgba(162, 146, 146, 0.23)', borderBottomWidth: 2, paddingVertical: 4, marginHorizontal:-15}} />
                    <View style={penginapanDetail.row}>
                        <Image style={penginapanDetail.profileUlasan}
                            source={require('../Assets/Penginapan/profile.png')} />
                        <View style={penginapanDetail.isiUlasan}>
                            <View style={penginapanDetail.row}>
                                <Text style = {penginapanDetail.namaUlasan}>Polly Anna</Text>
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')}/>
                            </View>
                        <Text style={penginapanDetail.isi}>Kamarnya nyaman dan bersih. Pelayanannya pun baik</Text>
                        </View>   
                    </View>
                    <View style={penginapanDetail.row}>
                        <Image style={penginapanDetail.profileUlasan}
                            source={require('../Assets/Penginapan/profile.png')} />
                        <View style={penginapanDetail.isiUlasan}>
                            <View style={penginapanDetail.row}>
                                <Text style = {penginapanDetail.namaUlasan}>Polly Anna</Text>
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {penginapanDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')}/>
                            </View>
                        <Text style={penginapanDetail.isi}>Kamarnya nyaman dan bersih. Pelayanannya pun baik</Text>
                        </View>   
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default PenginapanDetail;