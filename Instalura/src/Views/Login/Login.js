import React, { useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Platform
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import estilo from './Style';
import efetuarLogin from '../../api/logins';


function Login({navigation}) {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    let altura = Platform.OS == "ios" ? altura = 35 : altura = 0;

    const tentarLogar = async () => {
        try {

            await setMensagemErro('');
            const token = await efetuarLogin(usuario, senha);

            await AsyncStorage.setItem("instalura_token", token);
            console.warn(AsyncStorage.getItem("instalura_token"));
            navigation.replace("Feed", {nome: usuario});
        } catch (erro) {
            setMensagemErro(erro.message);
        }

    }

    return (
        <>
            <View style={estilo.container}>
                <TextInput
                    placeholder="Usuário"
                    style={estilo.input}
                    onChangeText={text => setUsuario(text)}
                />

                <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={estilo.input}
                    onChangeText={text => setSenha(text)}
                />
                <Text>{mensagemErro}</Text>
            </View>
            <View style={estilo.containerBtn}>

                <Button
                    title="Entrar"
                    style={estilo.btn}
                    onPress={tentarLogar}
                />
            </View>
        </>
    );
}

Login.navigationOptions = () =>{
    const opcoes = {
        title: "Login"

    }

    //O android já tem o botão de voltar, em alguns casos não faz sentido mantê-lo
    Platform.OS == "android" ? opcoes.header = null : "";
    
    
    return opcoes;
}

export default Login;
