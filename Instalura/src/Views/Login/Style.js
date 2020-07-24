import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    container:{
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        backgroundColor : "#333",   
        
        width: largura*0.8,     
    },
    input:{        
        width: largura*0.8,
        textAlign: "center",
        marginTop: 40,
        fontSize: 30,
    },
    containerBtn:{
        bottom: 120,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default estilo; 