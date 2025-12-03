const TopPerformers = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Top Performers</h2>
                <p className="text-gray-400">Dine best-selgende produkter</p>
            </div>

            <div className="bg-dark-card border-2 border-dark-border rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <span className="text-6xl mb-4 block">🏆</span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Top Performers Screen
                    </h3>
                    <p className="text-gray-400">
                        Kommer i Uke 2 - Product List & Category Chart
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopPerformers;
