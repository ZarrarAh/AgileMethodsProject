import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';  // ← relative path
import LiveMetrics from './pages/LiveMetrics';  // ← relative path
import TopPerformers from './pages/TopPerformers';  // ← relative path
import SmartInsights from './pages/SmartInsights';  // ← relative path

function App() {
    return (
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
    );
}

export default App;