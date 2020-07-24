import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import estilo from './style';






export default function Foto({
  urlFoto,
  descricao,
  qtdLikes,
  curtirFoto,
  imgLike
}) {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const clicouCurtir = () => {

    const [novoEstCurtiu, qtd] = curtirFoto(curtiu, likes);
    setLikes(qtd);
    setCurtiu(novoEstCurtiu);
  }

  return (
    <>
      <Image
        source={{ uri: urlFoto }}
        style={estilo.imagem} />
      <Text>{descricao}</Text>

      <View style={estilo.ViewLike}>

        <TouchableOpacity onPress={clicouCurtir}>
          <Image
            source={imgLike(curtiu)}
            style={estilo.like}
          />
        </TouchableOpacity>
        <Text>{likes}</Text>
      </View>
    </>
  );
  
}
