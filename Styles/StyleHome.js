import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cuacaContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
    },
    bgCuaca: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6AC9F2',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemCuaca: {
        margin: 16,
    },
    tempat: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    tanggal: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    suhu: {
        fontSize: 50,
        color: '#FFFFFF',
        fontWeight: '500',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 35,
        marginBottom: 35,
    },
    title: {
        marginLeft: 16,
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
    },

    //wisata
    wisataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
    },
    bgWisata: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 110,
        height: 83,
        margin: 16,
        borderRadius: 7,
    },
    namaWisata: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#363636',
        marginTop: 40,
        marginBottom: 40,
    },
    next: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 40,
        marginBottom: 40,
    },

    //Berita
    beritaContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
    },
    bgBerita: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageBerita: {
        width: 110,
        height: 55,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 7,
    },    
    keterangan: {
        width: 190,
        marginTop: 16,
        marginBottom: 16,
    },
    namaBerita:{
        fontSize: 13,
        fontWeight: 'bold',
    },
    tanggalBerita:{
        fontSize: 10,
        marginTop: 5,
    },
})

export default styles;