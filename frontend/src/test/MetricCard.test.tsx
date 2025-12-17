import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MetricCard from '../components/MetricCard'
import type { Metric } from '../types/dashboard.types'

const mockMetric: Metric = {
    id: 'views',
    label: 'Visninger',
    value: 12400,
    change: 18.5,
    icon: '👁️',
    unit: 'number',
}

describe('MetricCard', () => {
    it('rendrer metric label', () => {
        render(<MetricCard metric={mockMetric} />)
        expect(screen.getByText('Visninger')).toBeInTheDocument()
    })

    it('viser ikon', () => {
        render(<MetricCard metric={mockMetric} />)
        expect(screen.getByText('👁️')).toBeInTheDocument()
    })

    it('formaterer tall med K for tusen', () => {
        render(<MetricCard metric={mockMetric} />)
        expect(screen.getByText('12.4K')).toBeInTheDocument()
    })

    it('viser positiv endring', () => {
        render(<MetricCard metric={mockMetric} />)
        expect(screen.getByText(/↑/)).toBeInTheDocument()
        expect(screen.getByText(/18\.5%/)).toBeInTheDocument()
    })

    it('viser negativ endring', () => {
        const negativMetric: Metric = {
            ...mockMetric,
            change: -5.2,
        }
        render(<MetricCard metric={negativMetric} />)
        expect(screen.getByText(/↓/)).toBeInTheDocument()
        expect(screen.getByText(/5\.2%/)).toBeInTheDocument()
    })

    it('har grønn farge for positiv endring', () => {
        render(<MetricCard metric={mockMetric} />)
        const changeElement = screen.getByText(/↑.*18\.5%/)
        expect(changeElement).toHaveClass('text-success')
    })

    it('har rød farge for negativ endring', () => {
        const negativMetric: Metric = {
            ...mockMetric,
            change: -5.2,
        }
        render(<MetricCard metric={negativMetric} />)
        const changeElement = screen.getByText(/↓.*5\.2%/)
        expect(changeElement).toHaveClass('text-danger')
    })

    it('viser currency unit', () => {
        const currencyMetric: Metric = {
            id: 'revenue',
            label: 'Omsetning',
            value: 67400,
            change: 15.7,
            icon: '💰',
            unit: 'currency',
        }
        render(<MetricCard metric={currencyMetric} />)
        expect(screen.getByText(/67\.4K/)).toBeInTheDocument()
    })

    it('viser percentage unit', () => {
        const percentMetric: Metric = {
            id: 'conversion',
            label: 'Konvertering',
            value: 2.77,
            change: -0.3,
            icon: '📊',
            unit: 'percentage',
        }
        render(<MetricCard metric={percentMetric} />)
        expect(screen.getByText('2.74%')).toBeInTheDocument()
    })
})