import apiClient from './client';

export const getMetrics = async () => {
    const response = await apiClient.get('/metrics');
    return response.data;
};

export const getTimeSeries = async (days = 7) => {
    const response = await apiClient.get('/time-series', {
        params: { days },
    });
    return response.data;
};

export const getTopProducts = async (limit = 5) => {
    const response = await apiClient.get('/products/top', {
        params: { limit },
    });
    return response.data;
};

export const getCategoryDistribution = async () => {
    const response = await apiClient.get('/categories/distribution');
    return response.data;
};

export const getInsights = async () => {
    const response = await apiClient.get('/insights');
    return response.data;
};

export const getPredictions = async () => {
    const response = await apiClient.get('/predictions');
    return response.data;
};

export const getHeatmapData = async () => {
    const response = await apiClient.get('/heatmap');
    return response.data;
};

export const getDashboardData = async () => {
    const response = await apiClient.get('/dashboard');
    return response.data;
};
