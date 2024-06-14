import axios from "axios";
// import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useSecureAxios = () => {
  // get auth token from local storage if it exists
  const token = localStorage.getItem("token");

  // const navigate = useNavigate();
  axiosSecure.interceptors.request.use((config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      // if (error.response && error.response.status === 401) {
      //   navigate("/login");
      // }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useSecureAxios;
