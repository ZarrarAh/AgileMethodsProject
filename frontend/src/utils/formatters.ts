export const formatNumber = (value: number): string => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(2)}M`;
    }
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
};

export const formatCurrency = (value: number): string => {
    const formatted = formatNumber(value);
    return `${formatted} kr`;
};

export const formatPercentage = (value: number): string => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
};

export const formatConversionRate = (value: number): string => {
    return `${value.toFixed(2)}%`;
};

export const getTrendInfo = (change: number) => {
    return {
        arrow: change >= 0 ? '↑' : '↓',
        color: change >= 0 ? 'text-success' : 'text-danger',
    };
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('no-NO', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
};

export const getActivityOpacity = (activity: number): number => {
    // Map activity (0-1) to opacity (0.2-1.0)
    return 0.2 + activity * 0.8;
};

export const getInsightTypeStyle = (type: string) => {
    const styles = {
        peak: {
            borderColor: 'border-primary-cyan',
            bgColor: 'bg-primary-cyan/10',
            textColor: 'text-primary-cyan',
        },
        best: {
            borderColor: 'border-success',
            bgColor: 'bg-success/10',
            textColor: 'text-success',
        },
        warning: {
            borderColor: 'border-warning',
            bgColor: 'bg-warning/10',
            textColor: 'text-warning',
        },
        optimization: {
            borderColor: 'border-primary-blue',
            bgColor: 'bg-primary-blue/10',
            textColor: 'text-primary-blue',
        },
        opportunity: {
            borderColor: 'border-info',
            bgColor: 'bg-info/10',
            textColor: 'text-info',
        },
    };

    return styles[type as keyof typeof styles] || styles.peak;
};
