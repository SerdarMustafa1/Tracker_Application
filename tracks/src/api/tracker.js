import axios from "axios";
import { AsyncStorage } from "react-native";
import ENV from "../../env";

const instance = axios.create({
  // baseURL: `${ENV.baseURL}`
  baseURL: "https://serdar-tracker-server.herokuapp.com/"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

export default instance;
