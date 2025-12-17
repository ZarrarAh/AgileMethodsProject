import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from '../components/Navigation'

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    )
}

describe('Navigation', () => {
    it('rendrer alle navigasjonslenker', () => {
        renderWithRouter(<Navigation />)
        expect(screen.getByText('Live Metrics')).toBeInTheDocument()
        expect(screen.getByText('Top Performers')).toBeInTheDocument()
        expect(screen.getByText('Smart Insights')).toBeInTheDocument()
    })

    it('rendrer navigasjonsikoner som SVG', () => {
        renderWithRouter(<Navigation />)
        const svgIcons = document.querySelectorAll('svg')
        expect(svgIcons.length).toBe(3)
    })

    it('har riktige lenker', () => {
        renderWithRouter(<Navigation />)

        const metricsLink = screen.getByText('Live Metrics').closest('a')
        const performersLink = screen.getByText('Top Performers').closest('a')
        const insightsLink = screen.getByText('Smart Insights').closest('a')

        expect(metricsLink).toHaveAttribute('href', '/metrics')
        expect(performersLink).toHaveAttribute('href', '/performers')
        expect(insightsLink).toHaveAttribute('href', '/insights')
    })

    it('har navigation container', () => {
        renderWithRouter(<Navigation />)
        const nav = document.querySelector('nav')
        expect(nav).toBeInTheDocument()
    })

    it('har riktig styling på container', () => {
        renderWithRouter(<Navigation />)
        const nav = document.querySelector('nav')
        expect(nav).toHaveClass('bg-white')
        expect(nav).toHaveClass('border-b')
    })
})