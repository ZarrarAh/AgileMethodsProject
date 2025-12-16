import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LiveMetrics from '../pages/LiveMetrics'

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    )
}

describe('LiveMetrics Page', () => {
    it('rendrer sidetittel', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            expect(screen.getByText('Live Metrics')).toBeInTheDocument()
        })
    })

    it('rendrer undertittel', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            expect(screen.getByText('Real-time dashboard metrics')).toBeInTheDocument()
        })
    })

    it('rendrer heatmap seksjon', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            expect(screen.getByText('Ukentlig aktivitet')).toBeInTheDocument()
        })
    })

    it('viser loading state for heatmap', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            expect(screen.getByText('Laster data...')).toBeInTheDocument()
        })
    })

    it('viser no data melding for time series', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            expect(screen.getByText('No time series data available')).toBeInTheDocument()
        })
    })

    it('har metrics grid container', async () => {
        renderWithRouter(<LiveMetrics />)
        await waitFor(() => {
            const grid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4')
            expect(grid).toBeInTheDocument()
        })
    })
})