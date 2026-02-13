/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pastel: {
                    pink: '#FFD6E8',
                    rose: '#FFABCE',
                    lavender: '#E6D5F5',
                    peach: '#FFE5D9',
                    mint: '#D5F5E3',
                    sky: '#D6EAF8',
                },
                romantic: {
                    red: '#FF6B9D',
                    purple: '#C77DFF',
                    gold: '#FFD700',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Quicksand', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(255, 107, 157, 0.15)',
                'glow': '0 0 30px rgba(255, 171, 206, 0.4)',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [],
}
