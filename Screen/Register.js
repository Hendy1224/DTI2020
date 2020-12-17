import * as React from 'react';
import {Button,Text, View, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StyleRegister';

const Register = () => {
    const navigation = useNavigation();
    const [name, onName] = React.useState('');
    const [email, onEmail] = React.useState('');
    const [password, onPassword] = React.useState('');
    const [confirmpassword, onConfirmPassword] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.title}>Nama Lengkap</Text>
                    <TextInput 
                        style={styles.textInput}
                        onName={text => onName(text)}
                        placeholder="Nama Lengkap"
                        value={name} 
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput 
                        style={styles.textInput}
                        onEmail={text => onEmail(text)}
                        placeholder="Email"
                        value={email} 
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Kata Sandi</Text>
                    <TextInput 
                        secureTextEntry={true} style={styles.textInput}
                        onPassword={text => onPassword(text)}
                        placeholder="******************"
                        value={password} 
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Konfirmasi Kata Sandi</Text>
                    <TextInput 
                        secureTextEntry={true} style={styles.textInput}
                        onConfirmPassword={text => onConfirmPassword(text)}
                        placeholder="******************"
                        value={confirmpassword} 
                    />
                </View>
            </View>
            <View style = {styles.viewButton}>
                <View style = {styles.button}>
                    <Button
                        color= '#29ADF8'
                        title = "Daftar" 
                        onPress = {() =>navigation.navigate('Welcome')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Register;