import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    FlatList,
    StatusBar,
    Platform
} from 'react-native';
import { CabecalhoPost } from '../../Components/CabecalhoPost/index';
import { Foto } from '../../Components/Foto/index';
import { Comentarios } from '../../Components/Comentarios/index';
import lerFotos from '../../api/feed';
import { imgLike, curtirFoto } from './../../api/curtidas';
import { adicionarComentario } from './../../api/comentarios';


function Feed() {

    const [fotos, setFotos] = useState([]);

    useEffect(() => {

        lerFotos(setFotos);
    }, []);

    // let altura = Platform.OS == "ios" ? altura = 35 : altura = 0;

    return (
        <ScrollView style={{ marginTop: altura }}>

            <StatusBar
                backgroundColor="#f5f5f5"
                barStyle="dark-content"
            />

            <FlatList
                data={fotos}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({ item }) =>
                        <>
                            <CabecalhoPost
                                nomeUsuario={item.userName}
                                urlImage={item.userURL} />

                            <Foto
                                urlFoto={item.url}
                                descricao={item.description}
                                qtdLikes={item.likes}
                                curtirFoto={curtirFoto}
                                imgLike={imgLike} />

                            <Comentarios
                                comentarios={item.comentarios}
                                adicionarComentario={adicionarComentario} />
                        </>
                } />
        </ScrollView>
    );
}


Feed.navigationOptions = ({navigation}) => {
     opcoes = {
        title: navigaton.getParam("nome")
    }

    Platform.OS == "android" ? opcoes.header = null: "";
};

export default Feed;