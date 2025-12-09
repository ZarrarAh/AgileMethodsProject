import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeProvider'; // ← NY LINJE

import SmartInsights from './pages/SmartInsights';
import TopPerformers from './pages/TopPerformers';
import Layout from './components/Layout';
import LiveMetrics from './pages/LiveMetrics';

function App() {
    return (
        <ThemeProvider defaultTheme="dark">  {/* ← NY LINJE */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate to="/metrics" replace />} />
                        <Route path="metrics" element={<LiveMetrics />} />
                        <Route path="performers" element={<TopPerformers />} />
                        <Route path="insights" element={<SmartInsights />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider> 
    );
}

export default App;