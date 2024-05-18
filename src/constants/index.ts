export const CV_URL =
  "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715065117/cv-codeirawan.jpg";

// export const CV_URL = "/CV.pdf";

export const PROFILE_PICTURE_URL =
  "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715062524/pp-codeirawan.jpg";

export const BLOG_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://codeirawan.vercel.app/api/blog"
    : "http://localhost:3000/api/blog";

export const PAGESPEED_CATEGORIES =
  "&category=accessibility&category=performance&category=best-practices&category=seo";

export const PRIMARY_COLOR = "#297AA2";
export const SECONDARY_COLOR = "#4B8267";

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_WEEK_IN_SECONDS = ONE_DAY_IN_SECONDS * 7;
export const REVALIDATE_INTERVAL = ONE_WEEK_IN_SECONDS;
