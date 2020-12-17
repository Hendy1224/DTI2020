import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
    image:{
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    itemName: {
        fontSize: 18,
        color: '#000000',
    },
    itemPrice: {
        fontSize: 20,
        color: '#F88C29',
        fontWeight: 'bold',
    },
    itemRating: {
        fontSize: 14,
    },
    buttonPesan:{
        backgroundColor: '#F88C29',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    itemPesan:{
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#FFFFFF'
    },  
    buttonTanya:{
        backgroundColor: '#39CDEE',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    itemTanya:{
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#FFFFFF',
    }, 
    deskripsi:{
        width: '100%',
        marginTop: 20,
    },
    deskripsiJudul:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemDeskripsi:{
        fontSize: 12,
    },
    viewUlasan: {
        borderRadius: 15,
        width: '100%',
        height: 125,
        backgroundColor: '#F1F3F8',
        marginTop: 16,
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    ulasan: {
        fontSize: 16,
    },
    list: {
        width: 330,
        height: 2,
        marginTop: 7,
        backgroundColor: '#FFFFFF'
    },
    itemProfile:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageProfile:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nameProfile: {
        fontSize: 12,
        color: '#000000',
    },
    ulasanProfile: {
        fontSize: 10,
        color: '#676565',
    },
    profile:{
        width: 160,
        marginLeft: 16,
    },
    stars:{
        width: 10,
        height: 10,
    },
})

export default styles;