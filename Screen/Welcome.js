import React from 'react';
import {Text,ScrollView,View,Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../Styles/StyleWelcome';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <FontAwesome5 name={'grin-beam'} size={100} color="#C3C9D1"/>
                <Text style={styles.title}>Registrasi Berhasil!</Text>
                <Text style={styles.subtitle}>Nikmati kemudahan berwisata</Text>
                <View style = {styles.button}>
                    <Button
                        color= '#38B7EE'
                        title = "Masuk" 
                        onPress = {() =>navigation.navigate('Login')}
                    />
                </View>
            </View>
        </ScrollView>
    )
  }
  
  export default Welcome;