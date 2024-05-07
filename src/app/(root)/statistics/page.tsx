import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics X-codeirawan",
  description: "Metadata statistics of codeirawan.vercel.app blogs",
  alternates: {
    canonical: "https://codeirawan.vercel.app/statistics",
  },
};

export default function Statistics() {
  return (
    <div className="p-8">
      <PageTitle title="Statistics" description="Blogs statistics" />
      <section></section>
    </div>
  );
}
