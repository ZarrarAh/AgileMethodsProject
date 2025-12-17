import {
    Eye,
    ShoppingCart,
    DollarSign,
    TrendingUp,
    TrendingDown,
    Package,
    Users,
    Activity,
    BarChart3,
    type LucideIcon
} from 'lucide-react';

interface IconMapperProps {
    iconName: string;
    className?: string;
    size?: number;
}

const iconMap: Record<string, LucideIcon> = {
    'Eye': Eye,
    'ShoppingCart': ShoppingCart,
    'DollarSign': DollarSign,
    'TrendingUp': TrendingUp,
    'TrendingDown': TrendingDown,
    'Package': Package,
    'Users': Users,
    'Activity': Activity,
    'BarChart3': BarChart3,
};

const IconMapper = ({ iconName, className = '', size = 24 }: IconMapperProps) => {
    const Icon = iconMap[iconName];

    if (!Icon) {
        console.warn(`Icon "${iconName}" not found in iconMap`);
        return <Activity className={className} size={size} />; // Fallback
    }

    return <Icon className={className} size={size} />;
};

export default IconMapper;