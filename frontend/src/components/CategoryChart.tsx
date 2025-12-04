import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { mockCategoryDistribution } from '../data/mockData';

const CategoryChart = () => {
    // Custom label to show percentage inside pie
    const renderCustomLabel = (entry: any) => {
        return `${entry.percentage}%`;
    };

    // Custom tooltip
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-dark-card border-2 border-primary-cyan p-3 rounded-lg shadow-lg">
                    <p className="text-white font-semibold">{payload[0].name}</p>
                    <p className="text-primary-cyan">
                        {payload[0].value}% av total omsetning
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="space-y-4">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    📊 Kategorifordeling
                </h3>
                <p className="text-gray-400 text-sm">
                    Omsetning per produktkategori
                </p>
            </div>

            {/* Pie Chart */}
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={mockCategoryDistribution}
                            dataKey="percentage"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={60}
                            label={renderCustomLabel}
                            labelLine={false}
                        >
                            {mockCategoryDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            formatter={(value) => (
                                <span className="text-gray-300 text-sm">{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Category breakdown */}
            <div className="space-y-3 mt-6">
                {mockCategoryDistribution.map((cat, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-dark-card border border-dark-border rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: cat.color }}
                            />
                            <span className="text-white font-medium">{cat.category}</span>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold text-white">{cat.percentage}%</p>
                            <p className="text-xs text-gray-400">av omsetning</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Insight */}
            <div className="mt-6 p-4 bg-success/10 border border-success/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-success text-lg">💡</span>
                    <h4 className="text-success font-semibold">Innsikt</h4>
                </div>
                <p className="text-sm text-gray-300">
                    <strong className="text-white">Yttertøy</strong> er din sterkeste kategori
                    med 45% av total omsetning. Vurder å utvide dette sortimentet.
                </p>
            </div>
        </div>
    );
};

export default CategoryChart;