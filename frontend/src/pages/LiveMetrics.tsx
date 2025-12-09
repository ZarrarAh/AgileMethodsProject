import HeatmapCalendar from '@/components/HeatmapCalendar';
import MiniBarChart from '../components/MiniBarChart';
import MetricCard from '../components/MetricCard';
import { mockMetrics, mockTimeSeries } from '../data/mockData';

const LiveMetrics = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Live Metrics</h2>
                <p className="text-gray-600 dark:text-gray-400">Sanntidsdata fra din butikk</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockMetrics.map((metric) => (
                    <MetricCard key={metric.id} metric={metric} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MiniBarChart
                    data={mockTimeSeries}
                    title="Ukentlig salg"
                    height={70}
                />

                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-6 h-64 flex items-center justify-center">
                    <p className="text-gray-400">🗓️ Heatmap Calendar kommer her (Uke 1)</p>
                </div>
            </div>
        </div>
    );
};

export default LiveMetrics;