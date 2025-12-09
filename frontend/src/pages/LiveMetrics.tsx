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
                console.log('🔄 Fetching data...');

                const [metricsData, timeData, heatData] = await Promise.all([
                    getMetrics(),
                    getTimeSeries(7),
                    getHeatmapData(),
                ]);

                console.log('📊 Raw time data:', timeData);
                console.log('📊 Raw heat data:', heatData);

                // Transform time series data for MiniBarChart
                // MiniBarChart expects: {date, label, value}
                const transformedTimeData = timeData.map(item => ({
                    date: item.date || item.day,
                    label: item.date || item.day,
                    value: item.views,        // Use views as the main value
                    views: item.views,
                    sales: item.sales,
                }));

                // Transform heatmap data
                const transformedHeatData = heatData.map(item => ({
                    day: item.dayName || item.day_name || item.day,
                    dayShort: item.dayShort || item.day_short,
                    activity: item.activity,
                }));

                console.log('✅ Transformed time data:', transformedTimeData);
                console.log('✅ Transformed heat data:', transformedHeatData);

                setMetrics(metricsData);
                setTimeSeriesData(transformedTimeData);
                setHeatmapData(transformedHeatData);
                setError(null);
            } catch (err) {
                console.error('❌ Error loading data:', err);
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
                <div className="bg-danger/10 border-2 border-danger rounded-lg p-8 max-w-md">
                    <h2 className="text-xl font-bold text-white mb-4">⚠️ Error</h2>
                    <p className="text-gray-300 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-primary-cyan text-dark-bg font-semibold px-6 py-3 rounded-lg hover:bg-primary-cyan/80 transition-colors"
                    >
                        Prøv igjen
                    </button>
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
                <div>
                    {timeSeriesData.length > 0 ? (
                        <MiniBarChart
                            data={timeSeriesData}
                            title="Visninger siste 7 dager"
                            height={80}
                        />
                    ) : (
                        <div className="glass-card p-6">
                            <p className="text-gray-400">No time series data available</p>
                        </div>
                    )}
                </div>

                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Ukentlig aktivitet
                    </h2>
                    {heatmapData.length > 0 ? (
                        <HeatmapCalendar data={heatmapData}/>
                    ) : (
                        <p className="text-gray-400">Laster data...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LiveMetrics;