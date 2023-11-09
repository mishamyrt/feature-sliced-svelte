import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
}

export default config
