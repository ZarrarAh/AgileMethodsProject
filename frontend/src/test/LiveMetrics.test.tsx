import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
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
    it('rendrer loading spinner ved oppstart', () => {
        renderWithRouter(<LiveMetrics />)
        const spinner = document.querySelector('.animate-spin')
        expect(spinner).toBeInTheDocument()
    })

    it('har loading container med flex layout', () => {
        renderWithRouter(<LiveMetrics />)
        const container = document.querySelector('.flex.items-center.justify-center')
        expect(container).toBeInTheDocument()
    })

    it('spinner har riktig styling', () => {
        renderWithRouter(<LiveMetrics />)
        const spinner = document.querySelector('.animate-spin')
        expect(spinner).toHaveClass('rounded-full')
        expect(spinner).toHaveClass('border-b-2')
        expect(spinner).toHaveClass('border-primary-cyan')
    })

    it('spinner har riktig størrelse', () => {
        renderWithRouter(<LiveMetrics />)
        const spinner = document.querySelector('.animate-spin')
        expect(spinner).toHaveClass('h-32')
        expect(spinner).toHaveClass('w-32')
    })

    it('loading container fyller skjermen', () => {
        renderWithRouter(<LiveMetrics />)
        const container = document.querySelector('.min-h-screen')
        expect(container).toBeInTheDocument()
    })

    it('rendrer inne i router kontekst', () => {
        const { container } = renderWithRouter(<LiveMetrics />)
        expect(container).toBeInTheDocument()
    })
})