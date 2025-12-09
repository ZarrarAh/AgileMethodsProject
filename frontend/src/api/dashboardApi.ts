import apiClient from './client';
import type {
    DashboardData,
    Metric,
    TimeSeriesDataPoint,
    Product,
    CategoryDistribution,
    Insight,
    Prediction,
    HeatmapDay,
} from '../types/dashboard.types';

/**
 * Get all metrics (Views, Sales, Revenue, Conversion)
 */
export const getMetrics = async (): Promise<Metric[]> => {
    const response = await apiClient.get('/metrics');
    return response.data as Metric[];
};

/**
 * Get specific metric by ID
 */
export const getMetricById = async (id: string): Promise<Metric> => {
    const response = await apiClient.get(`/metrics/${id}`);
    return response.data as Metric;
};

/**
 * Get time series data (7 days)
 */
export const getTimeSeries = async (days: number = 7): Promise<TimeSeriesDataPoint[]> => {
    const response = await apiClient.get('/time-series', {
        params: { days },
    });
    return response.data as TimeSeriesDataPoint[];
};

/**
 * Get top performing products
 */
export const getTopProducts = async (limit: number = 5): Promise<Product[]> => {
    const response = await apiClient.get('/products/top', {
        params: { limit },
    });
    return response.data as Product[];
};

/**
 * Get product by ID
 */
export const getProductById = async (id: string): Promise<Product> => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data as Product;
};

/**
 * Get category distribution
 */
export const getCategoryDistribution = async (): Promise<CategoryDistribution[]> => {
    const response = await apiClient.get('/categories/distribution');
    return response.data as CategoryDistribution[];
};

/**
 * Get all insights
 */
export const getInsights = async (): Promise<Insight[]> => {
    const response = await apiClient.get('/insights');
    return response.data as Insight[];
};

/**
 * Get insights by priority
 */
export const getInsightsByPriority = async (
    priority: 'high' | 'medium' | 'low'
): Promise<Insight[]> => {
    const response = await apiClient.get('/insights/priority', {
        params: { priority },
    });
    return response.data as Insight[];
};


/**
 * Get predictions for next month
 */
export const getPredictions = async (): Promise<Prediction[]> => {
    const response = await apiClient.get('/predictions');
    return response.data as Prediction[];
};


/**
 * Get heatmap data (weekly activity)
 */
export const getHeatmapData = async (): Promise<HeatmapDay[]> => {
    const response = await apiClient.get('/heatmap');
    return response.data as HeatmapDay[];
};


/**
 * Get complete dashboard data (one call for everything)
 */
export const getDashboardData = async (): Promise<DashboardData> => {
    const response = await apiClient.get('/dashboard');
    return response.data as DashboardData;
};


export default {
    // Metrics
    getMetrics,
    getMetricById,

    // Time Series
    getTimeSeries,

    // Products
    getTopProducts,
    getProductById,

    // Categories
    getCategoryDistribution,

    // Insights
    getInsights,
    getInsightsByPriority,

    // Predictions
    getPredictions,

    // Heatmap
    getHeatmapData,

    // Dashboard (all data)
    getDashboardData,
};
