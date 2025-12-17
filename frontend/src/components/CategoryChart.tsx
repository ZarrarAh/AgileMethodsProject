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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
                    </svg>
                    Kategorifordeling
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
                    <span className="text-success text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
                        </svg>
                    </span>
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