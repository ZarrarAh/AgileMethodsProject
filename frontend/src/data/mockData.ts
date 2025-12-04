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

export const mockMetrics: Metric[] = [
    {
        id: 'views',
        label: 'Visninger',
        value: 12400,
        change: 18.5,
        icon: '👁️',
        unit: 'number',
    },
    {
        id: 'sales',
        label: 'Salg',
        value: 342,
        change: 12.3,
        icon: '🛒',
        unit: 'number',
    },
    {
        id: 'revenue',
        label: 'Omsetning',
        value: 67400,
        change: 15.7,
        icon: '💰',
        unit: 'currency',
    },
    {
        id: 'conversion',
        label: 'Konverteringsrate',
        value: 2.74,
        change: -0.3,
        icon: '📊',
        unit: 'percentage',
    },
];

export const mockTimeSeries: TimeSeriesDataPoint[] = [
    { date: 'Man', value: 320 },
    { date: 'Tir', value: 380 },
    { date: 'Ons', value: 290 },
    { date: 'Tor', value: 450 },
    { date: 'Fre', value: 360 },
    { date: 'Lør', value: 410 },
    { date: 'Søn', value: 390 },
];

export const mockTopProducts: Product[] = [
    {
        id: 'p1',
        name: 'Vinterjakke Premium',
        rank: 1,
        views: 1845,
        sales: 93,
        conversionRate: 5.05,
        category: 'Yttertøy',
    },
    {
        id: 'p2',
        name: 'Klassisk Jeansbukse',
        rank: 2,
        views: 1620,
        sales: 68,
        conversionRate: 4.18,
        category: 'Bukser',
    },
    {
        id: 'p3',
        name: 'Strikket Genser',
        rank: 3,
        views: 1430,
        sales: 53,
        conversionRate: 3.70,
        category: 'Topper',
    },
    {
        id: 'p4',
        name: 'Sommertopp Hvit',
        rank: 4,
        views: 1265,
        sales: 36,
        conversionRate: 2.84,
        category: 'Topper',
    },
    {
        id: 'p5',
        name: 'Sport Leggings',
        rank: 5,
        views: 1140,
        sales: 28,
        conversionRate: 2.49,
        category: 'Bukser',
    },
];

export const mockCategoryDistribution: CategoryDistribution[] = [
    { category: 'Yttertøy', percentage: 45, color: '#0066ff' },
    { category: 'Bukser', percentage: 30, color: '#00f5ff' },
    { category: 'Topper', percentage: 25, color: '#00ff88' },
];

export const mockInsights: Insight[] = [
    {
        id: 'i1',
        type: 'peak',
        icon: '📈',
        title: 'Peak Salgsvindu',
        description: 'Torsdager kl. 18-20 har høyest konvertering',
        priority: 'high',
    },
    {
        id: 'i2',
        type: 'best',
        icon: '🏆',
        title: 'Beste Kategori',
        description: 'Yttertøy har 45% av total omsetning',
        priority: 'high',
    },
    {
        id: 'i3',
        type: 'warning',
        icon: '⚠️',
        title: 'Underperformer',
        description: 'Sport kategori har lav konverteringsrate (1.8%)',
        priority: 'medium',
    },
    {
        id: 'i4',
        type: 'optimization',
        icon: '⚙️',
        title: 'Optimaliseringsmulighet',
        description: 'Topper kategori kan økes med bedre produktbilder',
        priority: 'medium',
    },
    {
        id: 'i5',
        type: 'opportunity',
        icon: '💡',
        title: 'Vekstmulighet',
        description: 'Weekend-promotions kan øke salget med 20%',
        priority: 'high',
    },
];

export const mockPredictions: Prediction[] = [
    {
        metric: 'Visninger',
        currentValue: 12400,
        predictedValue: 14200,
        change: 14.5,
    },
    {
        metric: 'Salg',
        currentValue: 342,
        predictedValue: 385,
        change: 12.6,
    },
    {
        metric: 'Omsetning',
        currentValue: 89400,
        predictedValue: 102000,
        change: 14.1,
    },
];

export const mockHeatmap: HeatmapDay[] = [
    { day: 'Mandag', dayShort: 'M', activity: 0.6 },
    { day: 'Tirsdag', dayShort: 'T', activity: 0.4 },
    { day: 'Onsdag', dayShort: 'O', activity: 0.5 },
    { day: 'Torsdag', dayShort: 'T', activity: 1.0 },
    { day: 'Fredag', dayShort: 'F', activity: 0.7 },
    { day: 'Lørdag', dayShort: 'L', activity: 0.45 },
    { day: 'Søndag', dayShort: 'S', activity: 0.4 },
];

export const mockDashboardData: DashboardData = {
    metrics: mockMetrics,
    timeSeriesData: mockTimeSeries,
    topProducts: mockTopProducts,
    categoryDistribution: mockCategoryDistribution,
    insights: mockInsights,
    predictions: mockPredictions,
    heatmapData: mockHeatmap,
    lastUpdated: new Date().toISOString(),
};