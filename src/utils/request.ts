import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 导出一个封装后的请求函数
export const request = (url: string, config: AxiosRequestConfig): Promise<AxiosResponse> => {
  const newConfig: AxiosRequestConfig = {};
  if (config.method !== 'post') {
    newConfig.params = config;
  }
  newConfig.url = url;
  return instance(newConfig).then((response) => {
    return response.data;
  });
};
