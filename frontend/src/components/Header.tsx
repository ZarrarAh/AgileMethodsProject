import { ThemeToggle, useTheme } from './ThemeProvider';

const Header = () => {
    const { theme } = useTheme();
    
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-dark-card border-b-2 border-gray-200 dark:border-dark-border shadow-sm">
            <div className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/src/assets/logo.png" alt="Kleda Logo" className='h-10 w-auto'/>
                        <div>
                            <h1 className="text-2xl font-bold text-primary-cyan">
                                KLEDA DASHBOARD
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 opacity-80">
                                Datadrevet & Kompakt
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
            
            {/* Gradient border bottom */}
            <div className="h-0.5 bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-blue dark:from-primary-cyan dark:via-primary-blue dark:to-primary-cyan"></div>
        </header>
    );
};

export default Header;