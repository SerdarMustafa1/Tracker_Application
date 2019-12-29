import axios from "axios";
import { AsyncStorage } from "react-native";
import ENV from "../../env";

const instance = axios.create({
  // baseURL: `${ENV.baseURL}`
  baseURL: "http://fc983adf.ngrok.io"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
