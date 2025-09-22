/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = withMDX({
  images: {
    domains: ["res.cloudinary.com", "i.scdn.co", "www.gravatar.com", "github.com", "litahusin.com"],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

module.exports = nextConfig