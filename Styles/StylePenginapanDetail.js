import {StyleSheet} from 'react-native';

const penginapanDetail = StyleSheet.create({
    bg: {
        backgroundColor: '#F1F0F5'
    },
    container: {
        flex: 1
    },
    viewSub:{
        backgroundColor: 'rgba(56, 183, 238, 0.75)',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 16,
        height: 80,
        flexDirection: 'row',
    },
    sub: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 26,
    },
    containerImage: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 25,    
    },
    centerImage: {
        alignSelf: 'center',
        width: '83%',
        borderRadius: 10
    },
    containerDetail: {
        marginLeft: '9%',
        marginTop: 20,
        width: '86%'
    },
    itemTitle: {
        fontFamily: 'Poppins', 
        fontSize: 20,
    },
    viewLokasi: {
        flexDirection: 'row',
        marginVertical: 3,
        marginLeft: -3
    },
    itemLokasi: {
        fontFamily: 'Poppins', 
        fontSize: 15,
    },
    itemFasilitas: {
        fontFamily: 'Poppins', 
        fontSize: 13,
        paddingBottom: 10
    },
    itemKamar: {
        width: '95%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
    },
    viewItem: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    kamarTitle: {
        fontFamily: 'Poppins', 
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    kamarDetail: {
        fontFamily: 'Poppins', 
        fontSize: 10,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row'
    },
    kamarHarga: {
        fontFamily: 'Poppins', 
        fontSize: 15,
        color: '#F88C29',
        fontWeight: 'bold',
        marginLeft: 50,
    },
    pesanStyle: {
        fontFamily: 'Poppins', 
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#F88C29',
        marginTop: 10,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginLeft: 25
  },
    containerUlasan: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        flex: 1,
        marginVertical: 20,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    ulasanTitle: {
        fontFamily: 'Poppins',
        fontSize: 16
    },
    ulasanRating: {
        fontFamily: 'Poppins', 
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.67)',
        marginLeft: '65%'
    },
    itemStar: {
        marginTop: 2,
        marginLeft: 3
    },
    profileUlasan: {
        marginVertical: 15
    },
    namaUlasan: {
        paddingRight:'42%'
    },
    isiUlasan: {
        marginLeft: 10,
        marginTop: 3
    },
    isi: {
        fontFamily: 'Poppins', 
        fontSize: 12,
        color: '#676565',
        paddingRight: '25%',
    },
    itemStar2: {
        marginTop: 2,
        marginLeft: -4
    },
})

export default penginapanDetail;