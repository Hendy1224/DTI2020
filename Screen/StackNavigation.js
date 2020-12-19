import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import BottomNavigation from './Home';
import DetailBerita from './DetailBerita';
import Belanja from './Belanja';
import DetailBelanja from './DetailBelanja';
import DetailObjekWisata from './DetailObjekWisata';
import DetailTransaksi from './DetailTransaksi';
import Pesan from './Pesan';
import PesanSukses from './PesanSukses';
import Ulasan from './Ulasan';
import Kuliner from './Kuliner';
import KulinerDetail from "./KulinerDetail";
import Penginapan from './Penginapan';
import PenginapanDetail from './PenginapanDetail';
import PesanKamar from './PesanKamar';
import Wahana from "./Wahana";
import WahanaDetail from "./WahanaDetail";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Detail Berita"
                component={DetailBerita}
            />
            <Stack.Screen
                name="Bahan dan Olahan Lokal"
                component={Belanja}
            />
            <Stack.Screen
                name="Detail Bahan dan Olahan Lokal"
                component={DetailBelanja}
            />
            <Stack.Screen
                name="Pesan"
                component={Pesan}
            />
            <Stack.Screen
                name="Pesan Sukses"
                component={PesanSukses}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Detail Objek Wisata"
                component={DetailObjekWisata}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Detail Transaksi"
                component={DetailTransaksi}
            />
            <Stack.Screen
                name="Ulasan"
                component={Ulasan}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Kuliner"
                component={Kuliner}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="KulinerDetail"
                component={KulinerDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Penginapan"
                component={Penginapan}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PenginapanDetail"
                component={PenginapanDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PesanKamar"
                component={PesanKamar}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Wahana"
                component={Wahana}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="WahanaDetail"
                component={WahanaDetail}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export {AppStack};