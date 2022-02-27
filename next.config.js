const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com"
    ],
  }
});
