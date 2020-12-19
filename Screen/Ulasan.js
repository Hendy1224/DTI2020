import * as React from 'react';
import {Button,Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Ulasan = () => {
    const navigation = useNavigation();
    const [ulasan, onUlasan] = React.useState('');
    return(
        <ScrollView>
            <View style = {styless.container}>
                <View style = {styless.view}>
                    <Text style = {styless.title}>Ulasan</Text>
                    <View style = {styless.star}>
                        <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                        <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                        <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                        <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                        <FontAwesome5 name={'star'} size={24} color="#C3C9D1"/>
                    </View>
                    <View style={styless.viewContainer}>
                        <TextInput 
                            style = {styless.textInput}
                            onUlasan={text => onUlasan(text)}
                            value={ulasan} 
                        />
                    </View>
                    <View style = {styless.buttonContainer}>
                        <TouchableOpacity onPress = {() => navigation.navigate('Detail Transaksi')}>
                            <View style = {styless.button}>
                                <Text style = {styless.textHome}>Kembali</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.navigate('Akun')}>
                            <View style = {styless.button}>
                                <Text style = {styless.textTransaksi}>Tambah Ulasan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Ulasan;

const styless =StyleSheet.create({
    //Berita
    container: {
        marginTop: '35%',
        marginBottom: '35%',
        alignItems:'center',
    },
    view: {
        backgroundColor: '#FFFFFF',
        width: 265,
        height: 365,
        paddingLeft: 16,
        paddingTop: 32,
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 32,
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginLeft: 26,
        width: 190,
        height: 140,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#C0C0C0',
        backgroundColor: '#D3D3D3',
    },
    textInput: {
        width: 190,
        height: 140,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    button:{
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        width: 80,
        height: 50,
        backgroundColor: '#39B7EE',
        borderRadius: 5,
    },
    textHome:{
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 16,
    },
    textTransaksi:{
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        margin: 8,
    },
})