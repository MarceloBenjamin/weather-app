/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: any = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const SetupInterceptors: React.FC = () => {
  const configInterceptors = () => {
    axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig) => config,
      (error: AxiosError) => Promise.reject(error),
    );

    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => Promise.reject(error),
    );
  };

  useEffect(() => {
    configInterceptors();
  }, []);

  return <></>;
};

export default axiosInstance;
