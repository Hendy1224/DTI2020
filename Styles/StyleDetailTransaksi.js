import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
    border: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    bgButton:{
        width: 300,
        height: 35,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#38B7EE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    bgList:{
        width: 300,
        height: 2,
        marginTop: 8,
        backgroundColor: '#AAA1A1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    transaksiItem:{
        fontSize: 12,
        fontWeight: '500',
        color: '#000000',
    },
    keteranganContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    judulKeterangan:{
        marginRight: 16,
    },
})

export default styles;