import axios from "axios";
// import { createProxyMiddleware } from "http-proxy-middleware";


// instance of axios
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  },
//   proxy: createProxyMiddleware({ target: 'https://api.deezer.com', changeOrigin: true}),
});

export default axiosInstance;
