import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import penginapan from '../Styles/StylePenginapan';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: "1",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "2",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "3",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "4",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "5",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "6",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
    {
        id: "7",
        title: "Penginapan A",
        lokasi: "Jln. ABC no 1,",
        harga: "150.000",
        rating: "4/5",
    },
];

const Item = ({ item, onPress}) => (
        <View style={penginapan.itemContainer}>
            <View style={penginapan.viewItem}>
                <Image source={require('../Assets/Penginapan/Kamar.png')} />
                <View style={penginapan.viewItemData}>
                    <View style={penginapan.viewArrow}>
                        <Text style={penginapan.itemTitle}>{item.title}</Text>
                        <Text style={penginapan.itemRating}>{item.rating}</Text>
                        <Image style={penginapan.itemStar}
                            source={require('../Assets/Penginapan/star.png')} />
                    </View>
                    <Text style={penginapan.itemLokasi}>Lokasi : {item.lokasi}</Text>
                    <Text style={penginapan.itemLokasi}>Mulai dari :</Text>
                    <View style={penginapan.viewArrow}>
                        <Text style={penginapan.itemHarga}>Rp. {item.harga}/per malam</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Image style={penginapan.arrow} source={require('../Assets/arrow-right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
);

const Penginapan = () => {
    const navigation = useNavigation();
    const [selectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() =>
                    navigation.navigate('PenginapanDetail')
                }
            />
        );
    };

    return (
        <ScrollView style={penginapan.bg}>
            <View style={penginapan.container}>
                <View style={penginapan.viewSub}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../Assets/arrow-back.png')} />
                    </TouchableOpacity>
                    <Text style={penginapan.sub}>Penginapan</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>
        </ScrollView>
    )
};

export default Penginapan;