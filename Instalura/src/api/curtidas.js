const imgLike = (curtiu) => {
  return curtiu == true ? require("../../res/img/s2-checked.png") : require("../../res/img/s2.png");
}

const curtirFoto = (curtiu, likes) => {

  let qtd = curtiu == true ? likes - 1 : likes + 1;
  return [!curtiu, qtd];
}

export {imgLike, curtirFoto};