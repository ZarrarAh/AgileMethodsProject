import apiClient from './client';
import type { Metric, Product, Insight, DashboardData } from '../types/dashboard.types';

// Get all metrics
export const getMetrics = async (): Promise<Metric[]> => {
    const response = await apiClient.get<Metric[]>('/metrics');
    return response.data;
};

// Get top products
export const getTopProducts = async (limit: number = 5): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products/top', {
        params: { limit },
    });
    return response.data;
};

// Get insights
export const getInsights = async (): Promise<Insight[]> => {
    const response = await apiClient.get<Insight[]>('/insights');
    return response.data;
};

// Get complete dashboard data
export const getDashboardData = async (): Promise<DashboardData> => {
    const response = await apiClient.get<DashboardData>('/dashboard');
    return response.data;
};

export default {
    getMetrics,
    getTopProducts,
    getInsights,
    getDashboardData,
};