import {StyleSheet} from 'react-native';

const kulinerDetail = StyleSheet.create({
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
        marginTop:2
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
        marginTop: 10
    },
    viewLokasi: {
        flexDirection: 'row',
        marginTop: -30,
        marginLeft: -3
    },
    itemLokasi: {
        fontFamily: 'Poppins', 
        fontSize: 15,
    },
    viewItem: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        width:'100%'
    },
    pesanStyle: {
        fontFamily: 'Poppins', 
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#C3C9D1',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: '55%',
        marginRight: '20%',
        borderRadius: 10,
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
    Text1: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 15
    },
    Text2: {
        fontFamily: 'Poppins',
        fontSize: 13,
        textAlign: 'justify',
        marginRight: 20
    }
})

export default kulinerDetail;