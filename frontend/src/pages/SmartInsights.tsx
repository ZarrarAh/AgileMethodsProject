import InsightList from '../components/InsightList';
import PredictionsWidget from '../components/PredictionsWidget';

const SmartInsights = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Smart Insights</h2>
                <p className="text-gray-400">
                    AI-drevne anbefalinger og prediksjoner for din butikk
                </p>
            </div>

            {/* Stats overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-primary-cyan/10 border-2 border-primary-cyan rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
                            </svg>
                        </span>
                        <p className="text-sm text-gray-400">Aktive Innsikter</p>
                    </div>
                    <p className="text-3xl font-bold text-primary-cyan">5</p>
                </div>

                <div className="bg-danger/10 border-2 border-danger rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                            </svg>
                        </span>
                        <p className="text-sm text-gray-400">Høy Prioritet</p>
                    </div>
                    <p className="text-3xl font-bold text-danger">2</p>
                </div>

                <div className="bg-success/10 border-2 border-success rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                        </span>
                        <p className="text-sm text-gray-400">Forventet Vekst</p>
                    </div>
                    <p className="text-3xl font-bold text-success">+14%</p>
                </div>

                <div className="bg-primary-blue/10 border-2 border-primary-blue rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🎯</span>
                        <p className="text-sm text-gray-400">Konfidens</p>
                    </div>
                    <p className="text-3xl font-bold text-primary-blue">Høy</p>
                </div>
            </div>

            {/* Main content - Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Insights List */}
                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-6">
                    <InsightList />
                </div>

                {/* Right: Predictions Widget */}
                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-6">
                    <PredictionsWidget />
                </div>
            </div>

            {/* AI Assistant section */}
            <div className="bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 border-2 border-primary-cyan rounded-lg p-6">
                <div className="flex items-start gap-4">
                    <span className="text-5xl">🤖</span>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Vil du ha flere innsikter?
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Vår AI-assistent kan gi deg personlige anbefalinger basert på din
                            butikks unike data og mål.
                        </p>
                        <button className="bg-primary-cyan hover:bg-primary-cyan/80 text-dark-bg font-semibold px-6 py-3 rounded-lg transition-colors">
                            🗨️ Chat med AI-assistent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartInsights;