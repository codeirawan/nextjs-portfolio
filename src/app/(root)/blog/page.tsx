import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import BlogSection from "./[slug]/BlogSection";
import { getAllBlogs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog X-codeirawan",
  description: "Share thoughts and tutorials on web development.",
  alternates: { canonical: "https://codeirawan.vercel.app/blog" },
};

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <div className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />
      <BlogSection blogs={blogs} />
    </div>
  );
}
