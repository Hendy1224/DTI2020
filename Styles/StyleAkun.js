import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 65,
        backgroundColor: '#39B7EE',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
        margin: 16,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcon: {
        margin: 16,
    },
    container: {
        marginTop: 16,
        marginBottom: 16,
        marginRight: 16,
        marginLeft: 16,
    },
    profile: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 20,
    },
    profileImage:{
        width: 80,
        height: 80,
        borderRadius: 100,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
    },
    profileName: {
        margin: 16,
        borderRadius: 10,
        padding: 16,
        justifyContent: 'center'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6F6F6F',
    },
    email: {
        fontSize: 12,
        color: '#6F6F6F',
    },
    transaksiContainer: {
        marginTop: 16,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },  
    daftarTransaksi: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    transaksiTitle:{
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        marginTop: 12,
    },
    transaksiItem:{
        fontSize: 12,
        fontWeight: '500',
        color: '#000000',
    },
    keteranganContainer: {
        flexDirection: 'row',
    },
    judulKeterangan:{
        marginRight: 16,
    },
    keteranganContainer1: {
        textAlign: 'right',
        justifyContent: 'flex-end',
    },
    bgButton:{
        width: 300,
        height: 35,
        marginTop: 8,
        borderRadius: 5,
        backgroundColor: '#38B7EE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        fontSize: 12,
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
})

export default styles;