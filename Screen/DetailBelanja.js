import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StyleDetailBelanja';

const BelanjaDetail = ({navigation}) => {
    // const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style = {styles.image}
                    source={require('../Assets/pantai.png')}/>
                <View style = {styles.item}>
                    <View>
                        <Text style = {styles.itemName}>Ikan Nila</Text>
                        <Text style = {styles.itemPrice}>Rp. 30000,-</Text>
                        <Text style = {styles.itemRating}><Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/> 5/5 | Terjual 20</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress = {() =>
                            navigation.navigate('Pesan')
                        }>
                            <View style = {styles.buttonPesan}>
                                <Text style = {styles.itemPesan}>
                                    Pesan
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.buttonTanya}>
                            <Text style = {styles.itemTanya}>
                                Tanya
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.deskripsi}>
                    <Text style = {styles.deskripsiJudul}>Deskripsi Produk: </Text>
                    <Text style = {styles.itemDeskripsi}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View>
                <View style = {styles.viewUlasan}>
                    <View style = {styles.view}>
                        <Text style = {styles.ulasan}>Ulasan</Text>
                        <Text style = {styles.ulasan}>5/5 <Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/></Text>
                    </View>
                    <View style = {styles.list}>
                    </View>
                    <View style = {styles.view}>
                        <View style = {styles.itemProfile}>
                            <Image
                                style = {styles.imageProfile}
                                source={require('../Assets/pantai.png')}/>
                            <View style = {styles.profile}>
                                <Text style = {styles.nameProfile}>Story Fred</Text>
                                <Text style = {styles.ulasanProfile}>Ikannya seger-seger semua. Lain kali beli lagi</Text>
                            </View>
                        </View>
                        <Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/><Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/><Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/><Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/><Image
                            style = {styles.stars}
                            source={require('../Assets/star.png')}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default BelanjaDetail;