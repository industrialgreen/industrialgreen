/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    include: [path.join(__dirname, 'styles')]
  },
  ...nextTranslate(),
}

module.exports = nextConfig
