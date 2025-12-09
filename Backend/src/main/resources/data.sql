-- ============================================================================
-- KLEDA DASHBOARD - TEST DATA (Samme som mockData!)
-- ============================================================================

-- Clean up
DELETE FROM heatmap;
DELETE FROM predictions;
DELETE FROM insights;
DELETE FROM categories;
DELETE FROM products;
DELETE FROM time_series;
DELETE FROM metrics;

-- ============================================================================
-- METRICS (4 metrics)
-- ============================================================================

INSERT INTO metrics (metric_id, label, value, change, icon, unit) VALUES
                                                                      ('views', 'Visninger', 12400, 18.5, '👁️', 'number'),
                                                                      ('sales', 'Salg', 342, 12.3, '🛒', 'number'),
                                                                      ('revenue', 'Omsetning', 89400, 15.7, '💰', 'currency'),
                                                                      ('conversion', 'Konverteringsrate', 2.76, -0.3, '📊', 'percentage');


-- ============================================================================
-- TIME SERIES (7 days)
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
-- PRODUCTS (Top 5)
-- ============================================================================

INSERT INTO products (name, rank, views, sales, conversion_rate, category) VALUES
                                                                               ('Vinterjakke Premium', 1, 1800, 91, 5.05, 'Yttertøy'),
                                                                               ('Cargo Bukser', 2, 1560, 70, 4.49, 'Bukser'),
                                                                               ('Hoodie Classic', 3, 1420, 55, 3.87, 'Topper'),
                                                                               ('Regnjakke Pro', 4, 1680, 62, 3.69, 'Yttertøy'),
                                                                               ('Joggebukse Komfort', 5, 940, 35, 3.72, 'Bukser');


-- ============================================================================
-- CATEGORIES (3 categories)
-- ============================================================================

INSERT INTO categories (name, value, color) VALUES
                                                ('Yttertøy', 45, '#0066ff'),
                                                ('Bukser', 30, '#00f5ff'),
                                                ('Topper', 25, '#00ff88');


-- ============================================================================
-- INSIGHTS (5 insights - STATISKE, ingen AI!)
-- ============================================================================

INSERT INTO insights (type, icon, title, description, priority) VALUES
                                                                    ('peak', '📈', 'Peak Salgsvindu', 'Torsdager har historisk høyest salg. Vurder ekstra markedsføring på onsdager.', 'high'),
                                                                    ('best', '🏆', 'Beste Kategori', 'Yttertøy utgjør 45% av salget. Vurder å utvide denne kategorien.', 'high'),
                                                                    ('warning', '⚠️', 'Underperformer', 'Joggebukse Komfort har lav konvertering. Sjekk produktbilder.', 'medium'),
                                                                    ('optimization', '⚙️', 'Optimaliser Priser', 'Vinterjakke Premium har høyest konvertering. Test å øke pris 5-10%.', 'medium'),
                                                                    ('opportunity', '💡', 'Vekstmulighet', 'Cargo Bukser viser sterk vekst. Øk lagerkapasitet.', 'low');


-- ============================================================================
-- PREDICTIONS (3 predictions - STATISKE!)
-- ============================================================================

INSERT INTO predictions (metric, current_value, predicted_value, change) VALUES
                                                                             ('Visninger', 12400, 14200, 14.5),
                                                                             ('Salg', 342, 385, 12.6),
                                                                             ('Omsetning (NOK)', 89400, 102000, 14.1);


-- ============================================================================
-- HEATMAP (7 days)
-- ============================================================================

INSERT INTO heatmap (day, day_short, activity) VALUES
                                                   ('Mandag', 'M', 0.68),
                                                   ('Tirsdag', 'T', 0.75),
                                                   ('Onsdag', 'O', 0.71),
                                                   ('Torsdag', 'T', 0.85),
                                                   ('Fredag', 'F', 0.78),
                                                   ('Lørdag', 'L', 0.67),
                                                   ('Søndag', 'S', 0.57);