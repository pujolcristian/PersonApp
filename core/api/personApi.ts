import axios from "axios";
import {Platform} from "react-native";

const baseURL =
    Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://192.168.128.10:8080';

const personApi = axios.create({
    baseURL: `${baseURL}`,
    timeout: 15000, // 15 seconds timeout
})
personApi.interceptors.request.use(async (config) => {
    const token = '1001-1001-1001';
    config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
    return config;
});

export {personApi};