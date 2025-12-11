import { useState, useEffect } from 'react';
import { getTopProducts, getCategoryDistribution } from '../api/dashboardApi';
import ProductList from '../components/ProductList';
import CategoryChart from '../components/CategoryChart';
import AnimatedPage from '@/components/AnimatedPage';

const TopPerformers = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log('Fetching products...');

                const [productsData, categoriesData] = await Promise.all([
                    getTopProducts(5),
                    getCategoryDistribution(),
                ]);

                console.log('Products loaded:', productsData);
                setProducts(productsData);
                setCategories(categoriesData);
                setError(null);
            } catch (err) {
                console.error('❌ Error loading data:', err);
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
        <AnimatedPage>
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Top Performers</h1>
                <p className="text-gray-400">Best-selling products and categories</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Top 5 Products
                    </h2>
                    <ProductList products={products} />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Category Distribution
                    </h2>
                    <CategoryChart data={categories} />
                </div>
            </div>
        </div>
    </AnimatedPage>
    );
};

export default TopPerformers;