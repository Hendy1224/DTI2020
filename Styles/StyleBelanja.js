import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        marginBottom: 16,
    },
    searchSection: {
        width: '100%',
        height: 50,
        backgroundColor: '#C5D9E4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    searchIcon: {
        padding: 16,
    },
    textInput: {
        padding: 16,
    },
    itemContainer: {
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 16,
    },
    bgItem: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    row: {
        justifyContent: "space-around"
    },
    image: {
        width: '100%',
        height: '67%',
        borderRadius: 7,
    },
    itemTitle:{
        fontSize: 15,
        color: '#746565',
    },
    itemHarga: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F88C29',
    },
})

export default styles;