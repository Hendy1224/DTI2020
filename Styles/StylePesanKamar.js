import { StyleSheet } from 'react-native';

const pesanKamar = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    },
    container2: {
        marginVertical: 7,
        marginHorizontal:15,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 18,
        marginVertical: 3
    },
    info: {
        width: '90%',
        flex: 1,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
    },
    fontLabel: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        paddingTop: 10
        
    },  
    textInput: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 4,
        marginTop: 1,
        borderRadius:5
    },
    textInputDate: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 4,
        paddingLeft: 3,
        marginHorizontal: 10,
        marginTop: 1,
        borderRadius: 5,
        width: '38%'
    },
    rowDate: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    fontHarga: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        paddingTop: 3 
    }, 
    fontHarga2: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        paddingTop: 3,
        position: 'absolute',
        right: 0,
    },
    pesanStyle: {
        fontFamily: 'Poppins', 
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    buttonStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#F88C29',
        marginTop: 10,
        paddingVertical: 7,
        paddingHorizontal: 10,
        width: 105,
        height: 40
    },
    imageSmile: {
        marginTop: 30,
        marginBottom: 20
    },
   centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(126, 131, 137, 0.58)'
}, 
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
      paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '75%',
    height: '50%'
    },
   textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 18,
    },
  textStyle2: {
    paddingTop:5,  
    color: '#796B6B',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
    },
  row: {
        flexDirection: 'row',
      width: '100%',
    },
  pesanStyle3: {
        fontFamily: 'Poppins', 
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
      textAlign: 'center',
      marginTop:10
        
    },
  pesanStyle2: {
        fontFamily: 'Poppins', 
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center'
    },
    buttonStyle2: {
        alignItems: 'center',
        backgroundColor: 'rgba(57, 183, 238, 0.79);',
        marginTop: 10,
        marginLeft:30,
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: 90,
        height: 70
  },

})

export default pesanKamar;