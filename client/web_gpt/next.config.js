/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  cssLoaderOptions: {
    url: false
  },
  env: {
    MAIN_URL: process.env.MAIN_URL,
  },
}

module.exports = nextConfig