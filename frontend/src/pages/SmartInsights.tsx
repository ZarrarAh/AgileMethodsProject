import { useState, useEffect } from 'react';
import { getInsights, getPredictions } from '../api/dashboardApi';
import InsightList from '../components/InsightList';
import PredictionsWidget from '../components/PredictionsWidget';

const SmartInsights = () => {
    const [insights, setInsights] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log('Fetching insights...');

                const [insightsData, predictionsData] = await Promise.all([
                    getInsights(),
                    getPredictions(),
                ]);

                console.log('Insights loaded:', insightsData);
                setInsights(insightsData);
                setPredictions(predictionsData);
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
                <h1 className="text-3xl font-bold text-white mb-2">Smart Insights</h1>
                <p className="text-gray-400">AI-powered recommendations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Insights
                    </h2>
                    <InsightList insights={insights} />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Predictions
                    </h2>
                    <PredictionsWidget predictions={predictions} />
                </div>
            </div>
        </div>
    );
};

export default SmartInsights;