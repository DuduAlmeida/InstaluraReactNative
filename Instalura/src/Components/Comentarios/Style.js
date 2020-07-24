import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    naMesmaLinha: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"baseline"
    },
    btnImg: {
        width: 30,
        height: 30,
        marginRight: 5,
        marginLeft: 5,
    },
    input: {        
        borderBottomWidth: 1,
        flex: 1,
        marginLeft: 5,
    },
    comentarios:{
        flexDirection: "row"
    }

});

export default estilo