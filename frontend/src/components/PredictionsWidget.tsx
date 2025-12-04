import { mockPredictions } from '../data/mockData';
import { formatNumber, formatCurrency, formatPercentage, getTrendInfo } from '../utils/formatters';

const PredictionsWidget = () => {
    // Get prediction icon based on metric
    const getMetricIcon = (metric: string) => {
        if (metric.includes('Visning')) return '👁️';
        if (metric.includes('Salg')) return '🛒';
        if (metric.includes('Omsetning')) return '💰';
        return '📊';
    };

    // Format value based on metric
    const formatValue = (metric: string, value: number) => {
        if (metric.includes('Omsetning')) return formatCurrency(value);
        return formatNumber(value);
    };

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    🔮 Prediksjoner
                </h3>
                <p className="text-gray-400 text-sm">
                    Forventet utvikling neste måned
                </p>
            </div>

            {/* Predictions cards */}
            <div className="space-y-4">
                {mockPredictions.map((prediction, index) => {
                    const { arrow, color } = getTrendInfo(prediction.change);
                    const icon = getMetricIcon(prediction.metric);

                    return (
                        <div
                            key={index}
                            className="bg-dark-card border-2 border-dark-border rounded-lg p-5 hover:border-primary-cyan transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{icon}</span>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-xs mb-1">
                                        {prediction.metric}
                                    </p>
                                    <p className="text-white font-bold text-lg">
                                        {formatValue(prediction.metric, prediction.currentValue)}
                                    </p>
                                </div>
                                <div className={`${color} text-xl font-bold flex items-center gap-1`}>
                                    <span>{arrow}</span>
                                    <span>{formatPercentage(prediction.change)}</span>
                                </div>
                            </div>

                            {/* Progress visualization */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Nåværende</span>
                                    <span>Forventet</span>
                                </div>
                                <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-primary-blue rounded-full transition-all duration-1000"
                                        style={{ width: '50%' }}
                                    />
                                    <div
                                        className={`absolute top-0 left-0 h-full ${
                                            prediction.change > 0 ? 'bg-success' : 'bg-danger'
                                        } rounded-full transition-all duration-1000 delay-300`}
                                        style={{
                                            width: `${50 + (prediction.change / 100) * 50}%`,
                                        }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    {formatValue(prediction.metric, prediction.currentValue)}
                  </span>
                                    <span className="text-white font-semibold">
                    {formatValue(prediction.metric, prediction.predictedValue)}
                  </span>
                                </div>
                            </div>

                            {/* Confidence indicator */}
                            <div className="mt-3 pt-3 border-t border-gray-700">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">Konfidensnivå</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-success" />
                                            <div className="w-2 h-2 rounded-full bg-success" />
                                            <div className="w-2 h-2 rounded-full bg-success" />
                                            <div className="w-2 h-2 rounded-full bg-success opacity-50" />
                                            <div className="w-2 h-2 rounded-full bg-gray-600" />
                                        </div>
                                        <span className="text-xs text-success font-semibold">Høy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* AI Model info */}
            <div className="mt-6 p-4 bg-primary-cyan/10 border border-primary-cyan/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-cyan text-lg">🤖</span>
                    <h4 className="text-primary-cyan font-semibold">AI-modell</h4>
                </div>
                <p className="text-sm text-gray-300">
                    Prediksjoner er basert på historiske data fra de siste 90 dagene
                    og tar hensyn til sesongvariasjoner og trender.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                    Sist oppdatert: {new Date().toLocaleDateString('no-NO')}
                </p>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
                <button className="bg-primary-blue hover:bg-primary-blue/80 text-white font-semibold py-3 rounded-lg transition-colors">
                    📥 Eksporter rapport
                </button>
                <button className="bg-dark-card border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan/10 font-semibold py-3 rounded-lg transition-colors">
                    📊 Se detaljer
                </button>
            </div>
        </div>
    );
};

export default PredictionsWidget;