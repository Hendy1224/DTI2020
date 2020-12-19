import { StyleSheet } from 'react-native';

const kuliner = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF'
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
        paddingTop: 3
    },
    itemContainer: {
        width: '90%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 20,
        borderWidth: 1,
    },
    viewItem: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    viewItemData: {
        paddingLeft: 10
    },
    itemTitle: {
        fontFamily: 'Poppins', 
        fontSize: 18,
        color: '#363636',
    },
    itemHarga: {
        fontFamily: 'Poppins', 
        fontSize: 13,
        color: '#F88C29',
        fontWeight: 'bold',
    },
    itemRating: {
        fontFamily: 'Poppins', 
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.67)',
        marginTop: 2,
        marginLeft: '40%',
    },
    itemStar: {
        marginTop: 2,
    },
    viewArrow: {
       flexDirection: 'row' 
    },
    arrow: {
        marginTop: -10,
        marginLeft: '30%',
    }
})

export default kuliner;