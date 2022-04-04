/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: ["en-US", "es-PE", "fr-CA"],
    defaultLocale: "es-PE"
  }
}

module.exports = nextConfig
