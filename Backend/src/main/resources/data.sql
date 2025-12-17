-- ============================================================================
-- METRICS
-- ============================================================================
INSERT INTO metrics (metric_id, label, metric_value, metric_change, icon, unit) VALUES
('views', 'Visninger', 12400, 18.5, 'Eye', 'number'),
('sales', 'Salg', 342, 12.3, 'ShoppingCart', 'number'),
('revenue', 'Omsetning', 89400, 15.7, 'DollarSign', 'currency'),
('conversion', 'Konverteringsrate', 2.76, -0.3, 'TrendingUp', 'percentage');
-- ============================================================================
-- TIME SERIES
-- ============================================================================
INSERT INTO time_series (date, views, sales) VALUES
('Man', 1680, 45),
('Tir', 1890, 52),
('Ons', 1750, 48),
('Tor', 2100, 58),
('Fre', 1920, 51),
('Lør', 1650, 44),
('Søn', 1410, 44);

-- ============================================================================
-- PRODUCTS
-- ============================================================================
INSERT INTO products (name, rank, views, sales, conversion_rate, category) VALUES
('Vinterjakke Premium', 1, 1800, 91, 5.05, 'Yttertøy'),
('Cargo Bukser', 2, 1560, 70, 4.49, 'Bukser'),
('Hoodie Classic', 3, 1420, 55, 3.87, 'Topper'),
('Regnjakke Pro', 4, 1680, 62, 3.69, 'Yttertøy'),
('Joggebukse Komfort', 5, 940, 35, 3.72, 'Bukser');

-- ============================================================================
-- CATEGORIES
-- ============================================================================
INSERT INTO categories (name, category_value, color) VALUES
('Yttertøy', 45, '#0066ff'),
('Bukser', 30, '#00f5ff'),
('Topper', 25, '#00ff88');

-- ============================================================================
-- INSIGHTS
-- ============================================================================
INSERT INTO insights (type, icon, title, description, priority) VALUES
('peak', 'chart-line', 'Peak Salgsvindu', 'Torsdager har historisk høyest salg.', 'high'),
('best', 'trophy', 'Beste Kategori', 'Yttertøy utgjør 45% av salget.', 'high'),
('warning', 'triangle-alert', 'Underperformer', 'Joggebukse Komfort har lav konvertering.', 'medium'),
('optimization', 'settings', 'Optimaliser Priser', 'Vinterjakke Premium har høyest konvertering.', 'medium'),
('opportunity', 'lightbulb', 'Vekstmulighet', 'Cargo Bukser viser sterk vekst.', 'low');

-- ============================================================================
-- PREDICTIONS
-- ============================================================================
INSERT INTO predictions (metric, current_value, predicted_value, prediction_change) VALUES
('Visninger', 12400, 14200, 14.5),
('Salg', 342, 385, 12.6),
('Omsetning (NOK)', 89400, 102000, 14.1);

-- ============================================================================
-- HEATMAP
-- ============================================================================
INSERT INTO heatmap (day_name, day_short, activity) VALUES
('Mandag', 'M', 68),
('Tirsdag', 'T', 75),
('Onsdag', 'O', 71),
('Torsdag', 'T', 85),
('Fredag', 'F', 78),
('Lørdag', 'L', 67),
('Søndag', 'S', 57);