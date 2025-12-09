import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const navItems = [
        { path: '/metrics', label: 'Live Metrics', icon: '📊' },
        { path: '/performers', label: 'Top Performers', icon: '🏆' },
        { path: '/insights', label: 'Smart Insights', icon: '💡' },
    ];

    return (
        <nav className="bg-white dark:bg-dark-card border-b border-gray-300 dark:border-dark-border">
            <div className="container mx-auto px-6">
                <div className="flex gap-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-6 py-4 font-medium transition-all ${
                                    isActive
                                        ? 'text-primary-blue dark:text-primary-cyan border-b-2 border-primary-blue dark:border-primary-cyan'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;