import axios from "axios";

const instance = axios.create({
  baseURL: "https://lazyinput-default-rtdb.firebaseio.com/",
});

export default instance;
