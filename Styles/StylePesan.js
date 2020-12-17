import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    titleAlamat: {
        fontSize: 18,
        fontWeight: '500',
    },
    titleBarang: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
    },
    borderAlamat: {
        width: '100%',
        height: 68,
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
    },
    isiAlamat: {
        fontSize: 14,
    },
    borderBarang: {
        width: '100%',
        height: 140,
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
    },
    isiBarangContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nama: {
        fontSize: 14,
        fontWeight: '300',
    },
    jumlah: {
        fontSize: 12
    },
    list:{
        width: '100%',
        height: 2,
        backgroundColor: '#A69A9A',
    },
    button: {
        width: 105,
        height: 34,
        backgroundColor: '#F88C29',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pesan: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '100',
    },
})

export default styles;