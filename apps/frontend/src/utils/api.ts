import axios from "axios";
import { FRONTEND_CONFIG } from "../env.config";


const api = axios.create({
  baseURL: FRONTEND_CONFIG.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});


export const getRequest = (url: string, config = {}) => api.get(url, config);

