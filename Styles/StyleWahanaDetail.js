import { StyleSheet } from 'react-native';

const wahanaDetail = StyleSheet.create ({
    bg: {
        backgroundColor: '#FFFFFF'
    },
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 16
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    },
    sub: {
        fontFamily: 'Poppins',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5
    },
    containerImage: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20,    
        paddingBottom: 15,  
    },
    centerImage: {
        alignSelf: 'center',
        width: '88%',
        borderRadius: 10
    },
    containerDetail: {
       backgroundColor: '#F1F0F5',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 10
    },
    Text1: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 15
    },
    Text2: {
        fontFamily: 'Poppins',
        fontSize: 13,
        textAlign: 'justify'
    }
})

export default wahanaDetail;