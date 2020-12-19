import * as React from 'react';
import { Text, View,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import wahanaDetail from '../Styles/StyleWahanaDetail';
import { useNavigation } from '@react-navigation/native';

const WahanaDetail = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={wahanaDetail.bg}>
            <View style={wahanaDetail.container}>
                <View style={wahanaDetail.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Wahana')}>
                        <Image source={require('../Assets/Penginapan/arrow-black.png')} />
                    </TouchableOpacity>
                    <Text style={wahanaDetail.sub}>Perahu Bebek</Text>
                </View>
                <View style={wahanaDetail.containerImage}>
                    <Image style={wahanaDetail.centerImage}
                        source={require('../Assets/Wahana/perahuBesar.png')} />
                </View>
                <View style={wahanaDetail.containerDetail}>
                    <Text style={wahanaDetail.Text1}>Deskripsi :</Text>
                    <Text style={wahanaDetail.Text2}>Tempat yang nyaman untuk bersantai mengelilingi tambak ikan menggunakan perahu bebek</Text>
                    <Text style={wahanaDetail.Text1}>Jam buka : <Text style={wahanaDetail.Text2}>06.00 - 19.00</Text></Text>
                    <Text style={wahanaDetail.Text1}>Harga : <Text style={wahanaDetail.Text2}>Rp. 10.000</Text></Text>
                </View>
            </View>
        </ScrollView>
    )

}

export default WahanaDetail;