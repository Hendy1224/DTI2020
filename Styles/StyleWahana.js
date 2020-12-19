import { StyleSheet } from 'react-native';

const wahana = StyleSheet.create ({
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
        width: '90%'
    },
    viewItemData: {
        paddingLeft: 10
    },
    itemTitle: {
        fontFamily: 'Poppins', 
        fontSize: 18,
        color: '#363636',
        marginTop: 15
    },
    arrow: {
        marginLeft:'70%'
    }
});

export default wahana;