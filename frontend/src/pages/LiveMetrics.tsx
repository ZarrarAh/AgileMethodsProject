import { useState, useEffect } from 'react';
import { getMetrics, getTimeSeries, getHeatmapData } from '../api/dashboardApi';
import MetricCard from '../components/MetricCard';
import MiniBarChart from '../components/MiniBarChart';
import HeatmapCalendar from '../components/HeatmapCalendar';

const LiveMetrics = () => {
    const [metrics, setMetrics] = useState([]);
    const [timeSeriesData, setTimeSeriesData] = useState([]);
    const [heatmapData, setHeatmapData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log('Fetching metrics...');

                const [metricsData, timeData, heatData] = await Promise.all([
                    getMetrics(),
                    getTimeSeries(7),
                    getHeatmapData(),
                ]);

                console.log('Metrics loaded:', metricsData);
                setMetrics(metricsData);
                setTimeSeriesData(timeData);
                setHeatmapData(heatData);
                setError(null);
            } catch (err) {
                console.error('Error loading data:', err);
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-cyan"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-danger/10 border-2 border-danger rounded-lg p-8">
                    <h2 className="text-xl font-bold text-white mb-4">⚠️ Error</h2>
                    <p className="text-gray-300">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Live Metrics</h1>
                <p className="text-gray-400">Real-time dashboard metrics</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                    <MetricCard key={metric.metricId} metric={metric} />
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        7-Day Trend
                    </h2>
                    <MiniBarChart data={timeSeriesData} />
                </div>

                <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Weekly Activity
                    </h2>
                    <HeatmapCalendar data={heatmapData} />
                </div>
            </div>
        </div>
    );
};

export default LiveMetrics;