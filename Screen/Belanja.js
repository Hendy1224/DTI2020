import * as React from 'react';
import 'react-native-gesture-handler';
import {Text, View,FlatList,SafeAreaView,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import belanja from '../Styles/StyleBelanja';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: "1",
        title: "Ikan Nila",
        harga: "30.000",
    },
    {
        id: "2",
        title: "Ikan Nila",
        harga: "30.000",
    },
    {
        id: "3",
        title: "Ikan Nila",
        harga: "30.000",
    },
    {
        id: "4",
        title: "Ikan Nila",
        harga: "30.000",
    },
    {
        id: "5",
        title: "Ikan Nila",
        harga: "30.000",
    },
    {
        id: "6",
        title: "Ikan Nila",
        harga: "30.000",
    },
];

const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={belanja.itemContainer}>
            <View style={belanja.bgItem}>
                <Image
                    style = {belanja.image}
                    source={require('../Assets/pantai.png')}/>
                <Text style={belanja.itemHarga}>Rp. {item.harga},-</Text>
                <Text style={belanja.itemTitle}>{item.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);
const Belanja = () => {
    const navigation = useNavigation();
    const [search, onSearch] = React.useState('');
    const [selectedId, setSelectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        return (
        <Item
            item={item}
            // onPress={() => setSelectedId(item.id)}
            onPress = {() =>
                navigation.navigate('Detail Bahan dan Olahan Lokal')
            }
        />
        );
    };

    return (
        <View style={belanja.container}>
            <View style={belanja.searchSection}>
                <TextInput 
                    style={belanja.textInput}
                    onSearch={text => onSearch(text)}
                    placeholder="Mencari........"
                    value={search} 
                />
                <FontAwesome5 style={belanja.searchIcon} name="search" size={16} color="#454D58"/>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={belanja.row}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    )
}
export default Belanja;