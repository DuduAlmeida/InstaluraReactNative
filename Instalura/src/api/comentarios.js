const adicionarComentario = (calback, comentarios, campo, conteudoCampo) => {
    // console.warn(conteudoCampo);
    campo.clear();

    const novoComentario = {
        date: Date.now(),
        text: conteudoCampo,
        userName: "Mr.Catra"
    }
    calback([...comentarios, novoComentario]);
}

export default adicionarComentario;