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

                </h3>
                <p className="text-gray-400 text-sm">
                    Anbefalinger basert på dine data
                </p>
            </div>

            {/* High priority insights */}
            {highPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-danger flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                        </svg>Høy Prioritet ({highPriority.length})
                    </h4>
                    {highPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight}/>
                    ))}
                </div>
            )}

            {/* Medium priority insights */}
            {mediumPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-warning flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                        </svg>
                        Middels Prioritet ({mediumPriority.length})
                    </h4>
                    {mediumPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight}/>
                    ))}
                </div>
            )}

            {/* Low priority insights */}
            {lowPriority.length > 0 && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                        </svg>
                        Lav Prioritet ({lowPriority.length})
                    </h4>
                    {lowPriority.map((insight) => (
                        <InsightCard key={insight.id} insight={insight}/>
                    ))}
                </div>
            )}

            {/* Summary */}
            <div className="mt-6 p-4 bg-primary-blue/10 border border-primary-blue/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-blue text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                    </span>
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