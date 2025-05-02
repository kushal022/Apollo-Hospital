// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // or './pages/**/*.{js,ts,jsx,tsx}' in Next.js
    ],
    theme: {
      extend: {
        colors: {
          brand: '#1DA1F2',
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar'), // example plugin
    ],
  }
  