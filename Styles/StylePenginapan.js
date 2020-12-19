import {StyleSheet} from 'react-native';

const penginapan = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF'
    },
    container: {
        margin: 16,
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
    itemContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        marginBottom: 16,
    },
    viewItem:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 120,
        height: 80,
    },
    keterangan: {
        width: '65%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        paddingLeft: 8,
        paddingRight: 24,
    },
    itemView:{
        width: '80%',
    },
    itemTitle: {
        fontSize: 18,
        color: '#363636',
    },
    itemLokasi: {
        fontSize: 12,
        color: '#363636',
    },
    itemMulai: {
        fontSize: 12,
        color: '#363636',
    },
    itemHarga: {
        fontSize: 12,
        color: '#EFB155',
    },
    itemRating: {
        fontSize: 12,
        color: '#EFB155',
    },
    itemStar: {
        width: 12,
        height: 12,
    },
    itemArrow:{
        marginTop: 20,
    },
    ratingView:{
        alignItems: 'flex-end',
        marginLeft: 8,
    },
})

export default penginapan;