import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
import Header from './Header';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
            <Header />
            <Navigation />
            <main className="container mx-auto px-6 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;