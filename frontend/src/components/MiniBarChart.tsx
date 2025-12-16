import { useState, useEffect, useMemo } from 'react';
import type { TimeSeriesDataPoint } from '../types/dashboard.types';

interface MiniBarChartProps {
    data: TimeSeriesDataPoint[];
    title?: string;
    showDayLabels?: boolean;
    showTooltip?: boolean;
    animated?: boolean;
    height?: number;
    onBarClick?: (data: TimeSeriesDataPoint, index: number) => void;
}

const MiniBarChart = ({
                          data,
                          title = '7-dagers trend',
                          showDayLabels = true,
                          showTooltip = true,
                          animated = true,
                          height = 60,
                          onBarClick,
                      }: MiniBarChartProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(!animated);

    useEffect(() => {
        if (animated) {
            const timer = setTimeout(() => setMounted(true), 50);
            return () => clearTimeout(timer);
        }
    }, [animated]);

    const normalizedData = useMemo(() => {
        const maxValue = Math.max(...data.map(d => d.value));
        return data.map(d => ({
            ...d,
            percentage: maxValue > 0 ? (d.value / maxValue) * 100 : 0,
        }));
    }, [data]);

    const trend = useMemo(() => {
        if (data.length < 2) return 0;
        const midPoint = Math.floor(data.length / 2);
        const firstHalf = data.slice(0, midPoint);
        const secondHalf = data.slice(midPoint);
        const firstAvg = firstHalf.reduce((sum, d) => sum + d.value, 0) / firstHalf.length;
        const secondAvg = secondHalf.reduce((sum, d) => sum + d.value, 0) / secondHalf.length;
        return firstAvg > 0 ? ((secondAvg - firstAvg) / firstAvg) * 100 : 0;
    }, [data]);

    const isPositiveTrend = trend >= 0;

    return (
        <div className="bg-dark-card border-2 border-dark-border rounded-lg p-4">
            <div className="flex justify-between items-center mb-8">
                <h4 className="text-white text-sm font-semibold tracking-wide">
                    {title}
                </h4>
                <div
                    className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                        isPositiveTrend
                            ? 'bg-success/15 text-success'
                            : 'bg-danger/15 text-danger'
                    }`}
                >
                    <span>{isPositiveTrend ? '↑' : '↓'}</span>
                    <span>{Math.abs(trend).toFixed(1)}%</span>
                </div>
            </div>

            <div
                className="relative flex gap-4 justify-center items-end px-6"
                style={{ height: `${height + (showDayLabels ? 24 : 0)}px` }}
            >
                {normalizedData.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    const isDimmed = hoveredIndex !== null && !isHovered;

                    return (
                        <div
                            key={index}
                            className={`flex-1 max-w-10 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${
                                isHovered ? 'scale-105' : ''
                            } ${isDimmed ? 'opacity-50' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => onBarClick?.(item, index)}
                        >
                            {showTooltip && isHovered && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 animate-fade-in">
                                    <div className="bg-dark-bg/95 border border-primary-cyan rounded-lg px-3 py-2 shadow-glow-cyan backdrop-blur-sm">
                                        <div className="text-[10px] text-gray-400 mb-0.5">
                                            {item.label || item.date}
                                        </div>
                                        <div className="text-sm font-bold text-white">
                                            {item.value.toLocaleString('nb-NO')}
                                        </div>
                                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-dark-bg/95 border-r border-b border-primary-cyan rotate-45" />
                                    </div>
                                </div>
                            )}

                            <div
                                className="w-full flex justify-center items-end"
                                style={{ height: `${height}px` }}
                            >
                                <div
                                    className={`w-full rounded-t transition-all duration-400 ease-out ${
                                        isHovered ? 'shadow-glow-cyan' : ''
                                    }`}
                                    style={{
                                        height: mounted ? `${item.percentage}%` : '0%',
                                        background: 'linear-gradient(to top, #0066ff, #00f5ff)',
                                        transitionDelay: animated ? `${index * 50}ms` : '0ms',
                                    }}
                                />
                            </div>

                            {showDayLabels && (
                                <span
                                    className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-200 ${
                                        isHovered ? 'text-primary-cyan' : 'text-gray-500'
                                    }`}
                                >
                  {item.date.charAt(0)}
                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MiniBarChart;