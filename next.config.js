/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
