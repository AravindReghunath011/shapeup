import { url } from 'inspector'


const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero.png')",
        'logo':"url('/logo.png)"
      },
      fontFamily: {
        'jeju': ['JejuGothic', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
       'center': 'center',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}
export default config
