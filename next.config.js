/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: ["en-US", "es-PE", "fr-CA"],
    defaultLocale: "es-PE"
  },
  serverExternalPackages: []
}

module.exports = nextConfig
