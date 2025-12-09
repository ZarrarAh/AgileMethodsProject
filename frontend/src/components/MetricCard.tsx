import type { Metric } from '../types/dashboard.types';
import { formatCurrency, formatNumber, formatPercentage, getTrendInfo } from '../utils/formatters';

interface MetricCardProps {
    metric: Metric;
}

const MetricCard = ({ metric }: MetricCardProps) => {
    const { label, value, change, icon, unit } = metric;
    const { arrow, color } = getTrendInfo(change);

    const formatValue = () => {
        switch (unit) {
            case 'currency':
                return formatCurrency(value);
            case 'percentage':
                return `${value}%`;
            default:
                return formatNumber(value);
        }
    };

    return (
        <div className="bg-white dark:bg-dark-card border-2 border-gray-200 dark:border-dark-border rounded-lg p-6 hover:border-primary-blue dark:hover:border-primary-cyan hover:scale-105 transition-all duration-300 animate-fade-in shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{icon}</span>
                <span className={`text-sm font-semibold ${color}`}>
                    {arrow} {formatPercentage(change)}
                </span>
            </div>

            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{label}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatValue()}</p>
        </div>
    );
};

export default MetricCard;