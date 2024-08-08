/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["shiki"],
  experimental: {
    // optimizePackageImports: ["shiki"],
    // TypeError: Cannot read properties of undefined (reading 'transformers')
    // shiki added to experimental packages as it uses ES modules => nextjs error = ERR_REQUIRE_ESM,
    // but then added to transpiledPackages
  },
};

export default nextConfig;
