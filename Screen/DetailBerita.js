import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Text, View,FlatList,SafeAreaView,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import detail from '../Styles/StyleDetailBerita';

const Detail = () => {
    return (
        <ScrollView>
            <View style={detail.container}>
                <View style={detail.view}>
                    <Text style={detail.judul}>Lorem ipsum dolor sit amet, consectetur adip</Text>
                    <Text style={detail.sumber}>Sumber:</Text>
                    <Image
                    style = {detail.image}
                    source={require('../Assets/idola.png')}/>
                <Text style={detail.deskripsi}>             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default Detail;