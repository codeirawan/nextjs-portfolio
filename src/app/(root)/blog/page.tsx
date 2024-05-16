import PageTitle from "@/components/elements/PageTitle";
import { REVALIDATE_INTERVAL } from "@/constants";
import type { Metadata } from "next";
import BlogSection from "./[slug]/BlogSection";

export const revalidate = REVALIDATE_INTERVAL;

export const metadata: Metadata = {
  title: "Blog X-codeirawan",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of front-end development. Adapt your mental framework to bring more predictability to front-end development.",
  alternates: {
    canonical: "https://codeirawan.vercel.app/blog",
  },
};

export default async function Blog() {

  return (
    <div className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />
      <BlogSection blogs={[]} />
    </div>
  );
}
