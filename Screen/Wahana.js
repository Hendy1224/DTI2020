import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import wahana from '../Styles/StyleWahana';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: "1",
        title: "Perahu Bebek",
    },
    {
        id: "2",
        title: "Pemancingan",
    },
    {
        id: "3",
        title: "Naik Perahu Nelayan",
    },
];

const Item = ({ item, onPress}) => (
        <View style={wahana.itemContainer}>
            <View style={wahana.viewItem}>
                <Image source={require('../Assets/Wahana/perahu.png')} />
                <View style={wahana.viewItemData}>
                        <Text style={wahana.itemTitle}>{item.title}</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Image style={wahana.arrow} source={require('../Assets/arrow-right.png')} />
                        </TouchableOpacity>
                </View>
            </View>
        </View>
);

const Wahana = () => { 
    const navigation = useNavigation();
    const [selectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() =>
                    navigation.navigate('WahanaDetail')
                }
            />
        );
    };

    return (
        <ScrollView style={wahana.bg}>
            <View style={wahana.container}>
                <View style={wahana.viewSub}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../Assets/arrow-back.png')} />
                    </TouchableOpacity>
                    <Text style={wahana.sub}>Wahana</Text>
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

export default Wahana;