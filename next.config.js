// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// next.config.js
const withTM = require('next-transpile-modules')(['react-scroll-section']); // pass the modules you would like to see transpiled

module.exports = withTM({});
