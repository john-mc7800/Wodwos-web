/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    screens: {
      coxs: '375px',
      xs: '425px',
      cosm: '500px',
      sm: '576px',
      comd: '680px',
      md: '768px',
      colg: '850px',
      lg: '992px',
      coxl: '1050px',
      xl: '1200px',
      co2xl: '1320px',
      '2xl': '1440px',
      '3xl': '1660px',
      '4xl': '1800px',
      max: '2000px',
      maxcoxs: { max: '374.5px' },
      maxcosm: { max: '424.5px' },
      maxsm: { max: '575.5px' },
      maxcomd: { max: '649.5px' },
      maxmd: { max: '767.5px' },
      maxlg: { max: '991.5px' },
      maxxl: { max: '1199.5px' },
      'md-to-lg': { min: '768px', max: '992px' },
      'lg-to-xl': { min: '992px', max: '1199px' },
    },
    extend: {
      backgroundImage: {
        'banner-image': "url('/banner.png')",
        'section-img': "url('/section-img.png')",
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        
      },
    },
  },
  plugins: [],
}
