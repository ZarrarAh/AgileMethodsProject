import ProductList from '../components/ProductList';
import CategoryChart from '../components/CategoryChart';

const TopPerformers = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Top Performers</h2>
                <p className="text-gray-400">Dine best-selgende produkter og kategorier</p>
            </div>

            {/* Main content - Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Product List */}
                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-6">
                    <ProductList />
                </div>

                {/* Right: Category Chart */}
                <div className="bg-dark-card border-2 border-dark-border rounded-lg p-6">
                    <CategoryChart />
                </div>
            </div>

            {/* Additional insights section (optional) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-card border-2 border-primary-cyan rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🎯</span>
                        <div>
                            <p className="text-sm text-gray-400">Høyest konvertering</p>
                            <p className="text-xl font-bold text-primary-cyan">5.05%</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">Vinterjakke Premium leder an</p>
                </div>

                <div className="bg-dark-card border-2 border-success rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">📈</span>
                        <div>
                            <p className="text-sm text-gray-400">Mest visninger</p>
                            <p className="text-xl font-bold text-success">1.8K</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">Vinterjakke Premium</p>
                </div>

                <div className="bg-dark-card border-2 border-warning rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🏆</span>
                        <div>
                            <p className="text-sm text-gray-400">Total salg (Top 5)</p>
                            <p className="text-xl font-bold text-warning">278</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">Siste 30 dager</p>
                </div>
            </div>
        </div>
    );
};

export default TopPerformers;
