import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://share-bite-server-brown.vercel.app",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
