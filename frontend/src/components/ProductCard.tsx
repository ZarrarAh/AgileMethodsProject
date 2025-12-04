import type { Product } from '../types/dashboard.types';
import { formatNumber, formatConversionRate } from '../utils/formatters';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { name, rank, views, sales, conversionRate, category } = product;

    // Rank badge with medal emoji
    const getRankBadge = (rank: number) => {
        switch (rank) {
            case 1:
                return { emoji: '🥇', color: 'text-yellow-400', bg: 'bg-yellow-400/10' };
            case 2:
                return { emoji: '🥈', color: 'text-gray-300', bg: 'bg-gray-300/10' };
            case 3:
                return { emoji: '🥉', color: 'text-orange-400', bg: 'bg-orange-400/10' };
            default:
                return { emoji: `#${rank}`, color: 'text-gray-400', bg: 'bg-gray-400/10' };
        }
    };

    const badge = getRankBadge(rank);

    // Conversion rate color
    const getConversionColor = (rate: number) => {
        if (rate >= 4.0) return 'text-success';
        if (rate >= 3.0) return 'text-primary-cyan';
        if (rate >= 2.0) return 'text-warning';
        return 'text-danger';
    };

    return (
        <div className="bg-dark-card border-2 border-dark-border rounded-lg p-5 hover:border-primary-cyan transition-all duration-300 animate-fade-in">
            <div className="flex items-start justify-between mb-4">
                {/* Rank badge */}
                <div className={`${badge.bg} ${badge.color} px-3 py-1 rounded-lg font-bold text-lg`}>
                    {badge.emoji}
                </div>

                {/* Conversion rate */}
                <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">Konvertering</p>
                    <p className={`text-xl font-bold ${getConversionColor(conversionRate)}`}>
                        {formatConversionRate(conversionRate)}
                    </p>
                </div>
            </div>

            {/* Product name */}
            <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2">
                {name}
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                    <p className="text-xs text-gray-400 mb-1">Visninger</p>
                    <p className="text-sm font-semibold text-white">
                        {formatNumber(views)}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-1">Salg</p>
                    <p className="text-sm font-semibold text-white">
                        {sales}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-1">Kategori</p>
                    <p className="text-sm font-semibold text-primary-cyan truncate">
                        {category}
                    </p>
                </div>
            </div>

            {/* Progress bar (visual representation of conversion) */}
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`absolute top-0 left-0 h-full ${
                        conversionRate >= 4.0 ? 'bg-success' :
                            conversionRate >= 3.0 ? 'bg-primary-cyan' :
                                conversionRate >= 2.0 ? 'bg-warning' :
                                    'bg-danger'
                    } transition-all duration-500`}
                    style={{ width: `${Math.min(conversionRate * 20, 100)}%` }}
                />
            </div>
        </div>
    );
};

export default ProductCard;
