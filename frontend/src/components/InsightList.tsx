import InsightCard from './InsightCard';
import { mockInsights } from '../data/mockData';

const InsightList = () => {
    // Group insights by priority
    const highPriority = mockInsights.filter(i => i.priority === 'high');
    const mediumPriority = mockInsights.filter(i => i.priority === 'medium');
    const lowPriority = mockInsights.filter(i => i.priority === 'low');

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    💡 AI-drevne Innsikter
                </h3>
                <p className="text-gray-400 text-sm">
                    Anbefalinger basert på dine data
                </p>
            </div>

            {/* High priority insights */}
            {highPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-danger flex items-center gap-2">
                        🔴 Høy Prioritet ({highPriority.length})
                    </h4>
                    {highPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight} />
                    ))}
                </div>
            )}

            {/* Medium priority insights */}
            {mediumPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-warning flex items-center gap-2">
                        🟡 Middels Prioritet ({mediumPriority.length})
                    </h4>
                    {mediumPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight} />
                    ))}
                </div>
            )}

            {/* Low priority insights */}
            {lowPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                        ⚪ Lav Prioritet ({lowPriority.length})
                    </h4>
                    {lowPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight} />
                    ))}
                </div>
            )}

            {/* Summary */}
            <div className="mt-6 p-4 bg-primary-blue/10 border border-primary-blue/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-blue text-lg">📊</span>
                    <h4 className="text-primary-blue font-semibold">Oppsummering</h4>
                </div>
                <p className="text-sm text-gray-300">
                    Du har <span className="font-bold text-white">{mockInsights.length} aktive innsikter</span>.
                    {highPriority.length > 0 && (
                        <> <span className="font-bold text-danger">{highPriority.length} krever umiddelbar oppmerksomhet</span>.</>
                    )}
                </p>
            </div>
        </div>
    );
};

export default InsightList;