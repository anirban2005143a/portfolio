/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'http://localhost:3000', // Allows ALL domains
            },
          ],
        // Or use the older domains format (still works):
        
      },
      poweredByHeader: false,
};

export default nextConfig;
