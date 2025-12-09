import { ThemeToggle, useTheme } from './ThemeProvider';

const Header = () => {
    const { theme } = useTheme();
    
    return (
        <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img  src="/src/assets/logo.png" alt="Kleda Logo" className='h-10 w-auto'/>
                        <div>
                            <h1 className="text-2xl font-bold text-primary-cyan">
                                Kleda Dashboard
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Datadrevet innsikt for klesbutikkeiere
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-bg/50">
                            <span className="text-xs text-gray-600 dark:text-gray-500">
                                {theme === 'dark' ? '🌙' : '☀️'} {theme}
                            </span>
                            <ThemeToggle />
                        </div>
                        
                        <div className="text-right">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Butikk Owner</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Demo Store</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary-cyan/20 flex items-center justify-center">
                            <span className="text-lg">👤</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;