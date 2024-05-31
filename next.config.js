/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "https://artify-production-700a.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;