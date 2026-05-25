/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Optimizaciones de performance
  compress: true,
  swcMinify: true,
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      }
    ]
  },

  // Redireccionamientos
  async redirects() {
    return []
  },
};

export default nextConfig;
