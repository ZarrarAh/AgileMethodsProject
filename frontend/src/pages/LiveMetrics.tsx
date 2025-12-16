import { useState, useEffect } from 'react';
import { getMetrics, getTimeSeries, getHeatmapData } from '../api/dashboardApi';
import MetricCard from '../components/MetricCard';
import MiniBarChart from '../components/MiniBarChart';
import HeatmapCalendar from '../components/HeatmapCalendar';
import AnimatedPage from '../components/AnimatedPage';

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
                console.log('Fetching data...');

                const [metricsData, timeData, heatData] = await Promise.all([
                    getMetrics(),
                    getTimeSeries(7),
                    getHeatmapData(),
                ]);

                console.log('Raw time data:', timeData);
                console.log('Raw heat data:', heatData);

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

                console.log('Transformed time data:', transformedTimeData);
                console.log('Transformed heat data:', transformedHeatData);

                setMetrics(metricsData);
                setTimeSeriesData(transformedTimeData);
                setHeatmapData(transformedHeatData);
                setError(null);
            } catch (err) {
                console.error('Error loading data:', err);
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
                    <h2 className="text-xl font-bold text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                        Error
                    </h2>
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
        <AnimatedPage>
        <div className="space-y-8">
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
    </AnimatedPage>
    );
};

export default LiveMetrics;