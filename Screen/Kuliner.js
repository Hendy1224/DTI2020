import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import kuliner from '../Styles/StyleKuliner';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: "1",
        title: "Cafe A",
        harga: "Rp. 3.000 - Rp. 30.000",
        rating: "5/5",
    },
    {
        id: "2",
        title: "Cafe A",
        harga: "Rp. 3.000 - Rp. 30.000",
        rating: "5/5",
    },
    {
        id: "3",
        title: "Cafe A",
        harga: "Rp. 3.000 - Rp. 30.000",
        rating: "5/5",
    },
    {
        id: "4",
        title: "Cafe A",
        harga: "Rp. 3.000 - Rp. 30.000",
        rating: "5/5",
    },
];

const Item = ({ item, onPress}) => (
        <View style={kuliner.itemContainer}>
            <View style={kuliner.viewItem}>
                <Image source={require('../Assets/Kuliner/cafe.png')} />
                <View style={kuliner.viewItemData}>
                    <View style={kuliner.viewArrow}>
                        <Text style={kuliner.itemTitle}>{item.title}</Text>
                        <Text style={kuliner.itemRating}>{item.rating}</Text>
                        <Image style={kuliner.itemStar}
                            source={require('../Assets/Kuliner/star.png')} />
                    </View>
                    <Text style={kuliner.itemLokasi}>Kisaran Harga :</Text>
                    <View style={kuliner.viewArrow}>
                        <Text style={kuliner.itemHarga}>{item.harga}</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Image style={kuliner.arrow} source={require('../Assets/arrow-right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
);

const Kuliner = () => {
    const navigation = useNavigation();
    const [selectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() =>
                    navigation.navigate('KulinerDetail')
                }
            />
        );
    };

    return (
        <ScrollView style={kuliner.bg}>
            <View style={kuliner.container}>
                <View style={kuliner.viewSub}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../Assets/arrow-back.png')} />
                    </TouchableOpacity>
                    <Text style={kuliner.sub}>Kuliner</Text>
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

export default Kuliner;