import { useState, useEffect } from 'react';
import { getTopProducts, getCategoryDistribution } from '../api/dashboardApi';
import ProductList from '../components/ProductList';
import CategoryChart from '../components/CategoryChart';
import AnimatedPage from '../components/AnimatedPage';

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
                    <h2 className="text-xl font-bold text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                        Error</h2>
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
                    <ProductList products={products} />
                </div>

                <div>
                    <CategoryChart data={categories} />
                </div>
            </div>
        </div>
    </AnimatedPage>
    );
};

export default TopPerformers;