import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import kulinerDetail from '../Styles/StyleKulinerDetail';
import { useNavigation } from '@react-navigation/native';


const KulinerDetail = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={kulinerDetail.bg}>
            <View style={kulinerDetail.container}>
                <View style={kulinerDetail.viewSub}>
                    <TouchableOpacity onPress={() => navigation.navigate('Kuliner')}>
                        <Image source={require('../Assets/arrow-back.png')} />
                    </TouchableOpacity>
                    <Text style={kulinerDetail.sub}>Kuliner</Text>
                </View>
                <View style={kulinerDetail.containerImage}>
                    <Image style={kulinerDetail.centerImage}
                        source={require('../Assets/Kuliner/cafeBesar.png')} />
                </View>
            </View>
            <View style={kulinerDetail.containerDetail}>
                <View style={kulinerDetail.row}>
                    <Text style={kulinerDetail.itemTitle}>Cafe A</Text>
                    <TouchableOpacity>
                        <View style={kulinerDetail.buttonStyle}>
                            <Image source={require('../Assets/Kuliner/map.png')}/>
                            <Text style={kulinerDetail.pesanStyle}>Rute</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={kulinerDetail.viewLokasi}>
                    <Image source={require('../Assets/Penginapan/lokasi.png')} />
                    <Text style={kulinerDetail.itemLokasi}>Jln. ABC no. 1</Text>
                </View>
                    <Text style={kulinerDetail.Text1}>Deskripsi :</Text>
                    <Text style={kulinerDetail.Text2}>Tempat yang nyaman untuk bersantai dan menikmati makanan dengan harga terjangkau. Dijamin enak dan puas!</Text>
                    <Text style={kulinerDetail.Text1}>Jam buka : <Text style={kulinerDetail.Text2}>06.00 - 19.00</Text></Text>
                    <Text style={kulinerDetail.Text1}>Harga : <Text style={kulinerDetail.Text2}>Rp. 3.000 - Rp. 30.000</Text></Text>
                
                <View style={kulinerDetail.containerUlasan}>
                    <View style={kulinerDetail.row}>
                        <Text style={kulinerDetail.ulasanTitle}>Ulasan</Text>
                        <Text style={kulinerDetail.ulasanRating}>5/5</Text>
                        <Image style={kulinerDetail.itemStar}
                            source={require('../Assets/Penginapan/star.png')} />
                    </View>
                    <View style={{ borderBottomColor: 'rgba(162, 146, 146, 0.23)', borderBottomWidth: 2, paddingVertical: 4, marginHorizontal:-15}} />
                    <View style={kulinerDetail.row}>
                        <Image style={kulinerDetail.profileUlasan}
                            source={require('../Assets/Penginapan/profile.png')} />
                        <View style={kulinerDetail.isiUlasan}>
                            <View style={kulinerDetail.row}>
                                <Text style = {kulinerDetail.namaUlasan}>Polly Anna</Text>
                                <Image
                                    style = {kulinerDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {kulinerDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {kulinerDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {kulinerDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')} />
                                <Image
                                    style = {kulinerDetail.itemStar2}
                                    source={require('../Assets/Penginapan/star.png')}/>
                            </View>
                        <Text style={kulinerDetail.isi}>Makanannya enak dan murah</Text>
                        </View>   
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default KulinerDetail;