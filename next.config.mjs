/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "fakestoreapi.com"
            },
            {
                protocol: "https",
                hostname: "pagedone.io"
            },
            {
                protocol: "https",
                hostname: "img.freepik.com"
            }
        ]
    }
};

export default nextConfig;
