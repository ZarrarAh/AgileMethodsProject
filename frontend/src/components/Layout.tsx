import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const Layout = () => {
    return (
        <div className="min-h-screen bg-dark-bg">
            <Header />
            <Navigation />
            <main className="container mx-auto px-6 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;