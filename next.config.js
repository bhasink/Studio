/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['api.swstudios.in'], // Add your API domain for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.swstudios.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }));
    
    return config;
  }
}

module.exports = nextConfig
