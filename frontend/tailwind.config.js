/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', 
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0a0e27',
                    card: 'rgba(255, 255, 255, 0.03)',
                    border: 'rgba(0, 245, 255, 0.2)',
                },
                primary: {
                    blue: '#0066ff',
                    cyan: '#00f5ff',
                },
                success: '#00ff88',
                danger: '#ff4444',
                warning: '#ffc107',
                info: '#0066ff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            spacing: {
                '0': '0',
                '1': '0.25rem',   // 4px
                '2': '0.5rem',    // 8px
                '3': '0.75rem',   // 12px
                '4': '1rem',      // 16px
                '5': '1.25rem',   // 20px
                '6': '1.5rem',    // 24px
                '8': '2rem',      // 32px
                '10': '2.5rem',   // 40px
                '12': '3rem',     // 48px
                '16': '4rem',     // 64px
            },
            borderRadius: {
                'sm': '4px',
                'DEFAULT': '8px',
                'lg': '12px',
                'xl': '16px',
                'full': '9999px',
            },
            boxShadow: {
                'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 10px 20px rgba(0, 102, 255, 0.3)',
                'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.5)',
                'glow-blue': '0 0 20px rgba(0, 102, 255, 0.5)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
