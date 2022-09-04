/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            lightGray: '#ECEBE5',
            focusGreen: '#86A9A3',
            mainGreen: '#6A8280',
            darkGreen: '#233F45',
        },
        fontFamily: {
            aboreto: ['Aboreto', 'cursive'],
            josefin: ['"Josefin Sans"', 'sans-serif'],
        },
        fontSize: {
            xl: '24px',
            l: '20px',
            s: '16px',
        },
        extend: {
            gridTemplateRows: {
                rowsProfileSection:
                    '250px, minmax(500px, max-content), repeat(auto-fill, minmax(min-content, max-content))',
            },
        },
    },
    plugins: [],
}
