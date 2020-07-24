import { Platform } from "react-native";

const lerFotos = async (callback) => {

  const fotosHTTP = Platform.OS == "ios"
    ? await fetch(`http://localhost:3030/feed`)
    : await fetch(`http://10.0.2.2:3030/feed`);
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
}

export default lerFotos;