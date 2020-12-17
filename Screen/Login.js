import * as React from 'react';
import {Button,Text, View, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StyleLogin';

const Login = () => {
    const navigation = useNavigation();
    const [email, onEmail] = React.useState('');
    const [password, onPassword] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.banyu}
                    source={require('../Assets/banyu.png')}/>
                <TextInput 
                    style={styles.textInput}
                    onEmail={text => onEmail(text)}
                    placeholder="Email/Nomor Telepon"
                    value={email} 
                />
                <TextInput 
                    secureTextEntry={true} style={styles.textInput}
                    onPassword={text => onPassword(text)}
                    placeholder="Kata Sandi"
                    value={password} 
                />
                <View style = {styles.button}>
                    <Button
                        color= '#29ADF8'
                        title = "Masuk"
                        onPress = {() =>
                            navigation.navigate('BottomNavigation')
                        }  
                    />
                </View>
                <Text style = {styles.akun}>
                    Belum memiliki akun? Daftar akun <Text style = {styles.akunBaru} onPress = {() =>navigation.navigate('Register')}>disini</Text>
                </Text>
            </View>
            <View style={styles.image}>
                <Image
                    source={require('../Assets/awal.png')}/>
            </View>
        </ScrollView>
    )
}

export default Login;