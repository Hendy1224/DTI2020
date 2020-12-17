import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        marginBottom: 16,
    },
    view: {
        width: '100%',
        height:'100%',
    },
    judul: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sumber: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AFACAC',
    },
    image:{
        width: '100%',
        height: 150,
        marginTop: 14,
    },
    deskripsi: {
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 16,
    },
})

export default styles;