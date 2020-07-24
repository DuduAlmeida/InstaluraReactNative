import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import estilo from './style';


const CabecalhoPost = ({ nomeUsuario, urlImage }) => {
    return (
        <View style={estilo.cabecalho}>
            <Image
                source={{uri: urlImage}}
                style={estilo.fotoUsuario} />
            <Text>{nomeUsuario}</Text>
        </View>
    );
}

export default CabecalhoPost;