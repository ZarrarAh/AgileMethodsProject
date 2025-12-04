// src/types/dashboard.types.ts

export interface Metric {
    id: string;
    label: string;
    value: number;
    change: number; // Percentage change
    icon: string;
    unit?: 'number' | 'currency' | 'percentage';
}

export interface TimeSeriesDataPoint {
    date: string;
    value: number;
    label?: string;
}

export interface DayData {
    day: string;
    value: number;
    label?: string;
}

export interface Product {
    id: string;
    name: string;
    rank: number;
    views: number;
    sales: number;
    conversionRate: number;
    thumbnail?: string;
    category: string;
}

export interface CategoryDistribution {
    category: string;
    percentage: number;
    color: string;
}

export type InsightType = 'peak' | 'best' | 'warning' | 'optimization' | 'opportunity' | 'prediction';

export interface Insight {
    id: string;
    type: InsightType;
    icon: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
}

export interface Prediction {
    metric: string;
    currentValue: number;
    predictedValue: number;
    change: number;
}

export interface HeatmapDay {
    day: string;
    dayShort: string;
    activity: number; // 0-1 scale
}

export interface DashboardData {
    metrics: Metric[];
    timeSeriesData: TimeSeriesDataPoint[];
    topProducts: Product[];
    categoryDistribution: CategoryDistribution[];
    insights: Insight[];
    predictions: Prediction[];
    heatmapData: HeatmapDay[];
    lastUpdated: string;
}