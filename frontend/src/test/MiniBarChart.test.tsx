import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MiniBarChart from '../components/MiniBarChart'
import type { TimeSeriesDataPoint } from '../types/dashboard.types'

const mockData: TimeSeriesDataPoint[] = [
    { date: 'Man', value: 320 },
    { date: 'Tir', value: 380 },
    { date: 'Ons', value: 290 },
    { date: 'Tor', value: 450 },
    { date: 'Fre', value: 360 },
    { date: 'Lør', value: 410 },
    { date: 'Søn', value: 390 },
]

describe('MiniBarChart', () => {
    it('rendrer med standard props', () => {
        render(<MiniBarChart data={mockData} />)
        expect(screen.getByText('7-dagers trend')).toBeInTheDocument()
    })

    it('viser custom tittel', () => {
        render(<MiniBarChart data={mockData} title="Ukentlig salg" />)
        expect(screen.getByText('Ukentlig salg')).toBeInTheDocument()
    })

    it('rendrer 7 dag-labels', () => {
        render(<MiniBarChart data={mockData} />)
        expect(screen.getByText('M')).toBeInTheDocument()
        expect(screen.getAllByText('T')).toHaveLength(2) // Tirsdag og Torsdag
        expect(screen.getByText('O')).toBeInTheDocument()
        expect(screen.getByText('F')).toBeInTheDocument()
        expect(screen.getByText('L')).toBeInTheDocument()
        expect(screen.getByText('S')).toBeInTheDocument()
    })

    it('skjuler dag-labels når showDayLabels er false', () => {
        render(<MiniBarChart data={mockData} showDayLabels={false} />)
        expect(screen.queryByText('M')).not.toBeInTheDocument()
    })

    it('viser positiv trend med ↑', () => {
        const stigendData: TimeSeriesDataPoint[] = [
            { date: 'Man', value: 100 },
            { date: 'Tir', value: 150 },
            { date: 'Ons', value: 200 },
            { date: 'Tor', value: 250 },
            { date: 'Fre', value: 300 },
            { date: 'Lør', value: 350 },
            { date: 'Søn', value: 400 },
        ]
        render(<MiniBarChart data={stigendData} />)
        expect(screen.getByText('↑')).toBeInTheDocument()
    })

    it('viser negativ trend med ↓', () => {
        const synkendData: TimeSeriesDataPoint[] = [
            { date: 'Man', value: 400 },
            { date: 'Tir', value: 350 },
            { date: 'Ons', value: 300 },
            { date: 'Tor', value: 250 },
            { date: 'Fre', value: 200 },
            { date: 'Lør', value: 150 },
            { date: 'Søn', value: 100 },
        ]
        render(<MiniBarChart data={synkendData} />)
        expect(screen.getByText('↓')).toBeInTheDocument()
    })

    it('kaller onBarClick når en bar klikkes', () => {
        const handleClick = vi.fn()
        render(<MiniBarChart data={mockData} onBarClick={handleClick} />)

        const firstBar = screen.getByText('M').parentElement
        if (firstBar) {
            fireEvent.click(firstBar)
            expect(handleClick).toHaveBeenCalledTimes(1)
            // Sjekk bare date og value, ignorer percentage
            expect(handleClick.mock.calls[0][0].date).toBe('Man')
            expect(handleClick.mock.calls[0][0].value).toBe(320)
            expect(handleClick.mock.calls[0][1]).toBe(0)
        }
    })

    it('viser tooltip ved hover', async () => {
        render(<MiniBarChart data={mockData} />)

        const firstBar = screen.getByText('M').parentElement
        if (firstBar) {
            fireEvent.mouseEnter(firstBar)
            expect(screen.getByText('320')).toBeInTheDocument()
        }
    })

    it('skjuler tooltip når showTooltip er false', () => {
        render(<MiniBarChart data={mockData} showTooltip={false} />)

        const firstBar = screen.getByText('M').parentElement
        if (firstBar) {
            fireEvent.mouseEnter(firstBar)
            expect(screen.queryByText('320')).not.toBeInTheDocument()
        }
    })

    it('håndterer tom data array', () => {
        render(<MiniBarChart data={[]} />)
        expect(screen.getByText('7-dagers trend')).toBeInTheDocument()
    })
})