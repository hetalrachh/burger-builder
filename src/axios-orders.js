import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-react-burger-ff0f1.firebaseio.com/"
});

export default instance;
