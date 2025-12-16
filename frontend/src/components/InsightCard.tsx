import type { Insight } from '../types/dashboard.types';
import { getInsightTypeStyle } from '../utils/formatters';

interface InsightCardProps {
    insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
    const { icon, title, description, type, priority } = insight;
    const style = getInsightTypeStyle(type);

    // Priority badge
    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case 'high':
                return {
                    label: 'Høy',
                    color: 'bg-danger text-white',
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                    </svg>
                };
            case 'medium':
                return {
                    label: 'Middels',
                    color: 'bg-warning text-dark-bg',
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                    </svg>
                };
            case 'low':
                return {
                    label: 'Lav',
                    color: 'bg-gray-500 text-white',
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                    </svg>
                };
            default:
                return {
                    label: 'Normal',
                    color: 'bg-gray-600 text-white',
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                    </svg>
                };
        }
    };

    const priorityBadge = getPriorityBadge(priority);

    // Type-specific styling
    const getTypeLabel = (type: string) => {
        const labels: { [key: string]: string } = {
            peak: 'Peak Timing',
            best: 'Best Performer',
            warning: 'Advarsel',
            optimization: 'Optimalisering',
            opportunity: 'Mulighet',
            prediction: 'Prediksjon',
        };
        return labels[type] || type;
    };

    return (
        <div
            className={`${style.bgColor} border-2 ${style.borderColor} rounded-lg p-5 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-all duration-300 animate-fade-in`}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                        <p className={`text-xs font-semibold ${style.textColor} mb-1`}>
                            {getTypeLabel(type)}
                        </p>
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                    </div>
                </div>

                {/* Priority badge */}
                <div className={`${priorityBadge.color} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                    <span>{priorityBadge.icon}</span>
                    <span>{priorityBadge.label}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
                {description}
            </p>

            {/* Action hint (optional) */}
            <div className="mt-4 pt-4 border-t border-gray-700">
                <button className={`${style.textColor} hover:underline text-sm font-medium flex items-center gap-2`}>
                    Se detaljer →
                </button>
            </div>
        </div>
    );
};

export default InsightCard;