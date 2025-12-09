import axios from 'axios';

// Hardkodet URL - fungerer uten .env
const API_BASE_URL = 'http://localhost:8080/api';

console.log('🔌 API Base URL:', API_BASE_URL);

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.request) {
            console.error('Backend is ikke kjørende på port 8080!');
        }
        return Promise.reject(error);
    }
);

export default apiClient;