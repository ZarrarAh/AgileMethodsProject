import ProductCard from './ProductCard';
import { mockTopProducts } from '../data/mockData';

const ProductList = () => {
    return (
        <div className="space-y-4">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    🏆 Top 5 Produkter
                </h3>
                <p className="text-gray-400 text-sm">
                    Rangert etter konverteringsrate
                </p>
            </div>

            {/* Product cards */}
            <div className="space-y-4">
                {mockTopProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Summary stats */}
            <div className="mt-6 p-4 bg-primary-cyan/10 border border-primary-cyan/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-cyan text-lg">📊</span>
                    <h4 className="text-primary-cyan font-semibold">Sammendrag</h4>
                </div>
                <p className="text-sm text-gray-300">
                    Gjennomsnittlig konvertering: <span className="font-bold text-white">3.85%</span>
                </p>
                <p className="text-sm text-gray-300">
                    Totalt salg (Top 5): <span className="font-bold text-white">278 enheter</span>
                </p>
            </div>
        </div>
    );
};

export default ProductList;