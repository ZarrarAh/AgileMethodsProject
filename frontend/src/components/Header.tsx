const Header = () => {
    return (
        <header className="bg-dark-card border-b border-dark-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl">📊</div>
                        <div>
                            <h1 className="text-2xl font-bold text-primary-cyan">
                                Kleda Dashboard
                            </h1>
                            <p className="text-sm text-gray-400">
                                Datadrevet innsikt for klesbutikkeiere
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm text-gray-400">Butikk Owner</p>
                            <p className="text-sm font-semibold">Demo Store</p>
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