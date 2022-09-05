module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
      screens: {
        // sm: '640px',
        // md: '740px',
        // lg: '980px',
        // xl: '1320px',
      },
    },
    extend: {
      fontFamily: {
        'paytone': '"Paytone One" , sans-serif',
        'squada': '"Squada One", cursive',
        'noto': '"Noto Sans TC" , sans-serif',
      },
      colors:{
        primary:'#E6553B',
        success:'#53C139',
        light: '#F0F0F0',
        dark: '#808080',
      },
      // fontSize: {
      //   xs: ['12px', '1.5'],
      //   sm: ['14px', '1.5'],
      //   base: ['16px', '1.5'],
      //   lg: ['18px', '1.5'],
      //   xl: ['20px', '1.5'],
      //   '2xl': ['24px', '1.5'],
      //   '3xl': ['30px', '1.5'],
      //   '4xl': ['36px', '1.5'],
      //   '5xl': ['48px', '1.5'],
      //   '6xl': ['64px', '1.5'],
      // },
      listStyleType: {
        square: 'square'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}