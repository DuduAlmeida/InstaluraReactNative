import React, { useState } from 'react';
import {
    Text,
    FlatList,
    TextInput,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import estilo from './Style';

const Comentarios = ({
    comentarios,
    adicionarComentario
}) => {

    const [estComentarios, setComentario] = useState(comentarios);

    let campoInput;
    let conteudoCampoInput = '';

    return (
        <>
            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={estilo.comentarios}>
                        <Text>{item.userName} </Text>
                        <Text> {item.text}</Text>
                    </View>
                }
            />

            <View style={estilo.naMesmaLinha}>

                <TextInput
                    placeholder={"Deixe o seu comentário..."}
                    style={estilo.input}
                    onChangeText={texto => conteudoCampoInput = texto}
                    ref={textInput => campoInput = textInput}
                />
                <TouchableOpacity onPress={adicionarComentario(setComentario, estComentarios, campoInput, conteudoCampoInput)}>

                    <Image
                        source={require("../../../res/img/send.png")}
                        style={estilo.btnImg}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Comentarios;