import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import detailob from '../Styles/StyleDetailObjekWisata';

const DetailOB = ({navigation}) => {
    // const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={detailob.header}>
                <FontAwesome5 style={detailob.icon} name="arrow-left" size={24} color="#000000"/> 
                <Text style={detailob.headerTitle}>Pantai Idola</Text>
            </View>
            <View style={detailob.imageContainer}>
                <View style={detailob.bgItem}>
                    <FontAwesome5 style={detailob.chevron} name="chevron-left" size={24} color="#000000"/> 
                    <Image
                        style = {detailob.image}
                        source={require('../Assets/pantai.png')}/>
                    <FontAwesome5 style={detailob.chevron} name="chevron-right" size={24} color="#000000"/> 
                </View>
            </View>
            <View style={detailob.deskripsiContainer}>
                <View style={detailob.viewDeskripsi}>
                    <Text style={detailob.deskripsi}>Deskripsi:</Text>
                    <Text style={detailob.isiDeskripsi}>Merupakan objek wisata yang terdisi dari beberapa wahana dan restoran khas daerah lokal.</Text>
                    <Text style={detailob.jamBuka}>Jam buka:</Text>
                    <Text style={detailob.isiJam}>08.00-19.00</Text>
                </View>
                <View style={detailob.viewRute}>
                    <FontAwesome5 style={detailob.iconRute} name="map" size={36} color="#000000"/> 
                    <Text style={detailob.rute}>Rute</Text>
                </View>
            </View>
            <View style={detailob.menu}>
                <FontAwesome5 style={detailob.menuIcon} name="bed" size={20} color="#000000"/> 
                <Text style={detailob.menuTitle}>Penginapan</Text>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate('Bahan dan Olahan Lokal')}>
                <View style={detailob.menu}>
                    <FontAwesome5 style={detailob.menuIcon} name="shopping-cart" size={20} color="#000000"/> 
                    <Text style={detailob.menuTitle}>Bahan dan Olahan Lokal</Text>
                </View>
            </TouchableOpacity>
            <View style={detailob.menu}>
                <FontAwesome5 style={detailob.menuIcon} name="map-marker-alt" size={20} color="#000000"/> 
                <Text style={detailob.menuTitle1}>Wahana</Text>
            </View>
            <View style={detailob.menu}>
                <FontAwesome5 style={detailob.menuIcon} name="utensils" size={20} color="#000000"/> 
                <Text style={detailob.menuTitle1}>Kuliner</Text>
            </View>
        </ScrollView>
    )
}

export default DetailOB;