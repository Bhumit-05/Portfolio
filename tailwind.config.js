/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'teal': '0 8px 16px rgba(20, 184, 166, 0.6)',
      },
      textShadow: {
        'teal-text': '0 8px 16px rgba(20, 184, 166, 0.6)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.keys(textShadow).map(key => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadow[key],
          },
        };
      });
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    }
  ],
}
