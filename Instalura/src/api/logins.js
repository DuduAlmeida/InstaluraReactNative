const efetuarLogin = async (usuario, senha) => {

    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),
        headers: {
            "Content-type": "application/json"
        }
    }

    const resposta = Platform.OS == "ios"
        ? await fetch(`http://localhost:3030/users/login`,
            cabecalhoHTTP)
        : await fetch(`http://10.0.2.2:3030/users/login`,
            cabecalhoHTTP);


    if(resposta.ok){
        return resposta.headers.get("x-access-token");
    }else{
        throw new Error("Não foi possível logar");
    }
    // console.warn(resposta);
}

export default efetuarLogin;