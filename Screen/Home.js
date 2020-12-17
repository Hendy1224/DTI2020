import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Home, ObjekWisata, Akun} from './BottomNavigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MenuBottom = createBottomTabNavigator();

const MenuHome = () => {
    return (
        <MenuBottom.Navigator>
            <MenuBottom.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ()=>(<FontAwesome5 name={'home'} size={20} color="#B1B9BD"/>)
                }}
            />
            <MenuBottom.Screen
                name="ObjekWisata"
                component={ObjekWisata}
                options={{
                    tabBarLabel:'Objek Wisata',
                    tabBarIcon: ()=>(<FontAwesome5 name={'map-marker-alt'} size={20} color="#B1B9BD"/>)
                }}
            />
            <MenuBottom.Screen
                name="Akun"
                component={Akun}
                options={{
                    tabBarLabel:'Akun',
                    tabBarIcon: ()=>(<FontAwesome5 name={'user-circle'} size={20} color="#B1B9BD"/>)
                }}
            />
        </MenuBottom.Navigator>
    )
}
export default MenuHome;