module.exports = {
  siteUrl: "https://codeirawan.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/studio/" }],
  },
};
