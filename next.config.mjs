import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'http',
                hostname: '192.168.43.66',
                port:'3000',
                pathname:'/uploads/**'
            }
        ]
    }
};
export default withNextIntl(nextConfig);