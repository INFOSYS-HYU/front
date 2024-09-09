import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { refreshAccessToken, setAuthHeader } from '../services/auth';

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      try {
        const accessToken = await refreshAccessToken();
        setAuthHeader(accessToken);
        return instance(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료되었다면 로그아웃 처리
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;