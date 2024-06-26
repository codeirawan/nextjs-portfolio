import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import SubscribeSection from "./SubsribeSection";

export const metadata: Metadata = {
  title: "Subscribe X-codeirawan",
  description:
    "Stay informed and receive email notifications whenever a new blog post is published. Subscribe to stay up-to-date with the latest content, delivered right to your inbox. Rest assured, we respect your privacy - no spam.",
  alternates: {
    canonical: "https://codeirawan.vercel.app/design",
  },
};

export default function Subscribe() {
  return (
    <div className="p-8">
      <PageTitle title="Subscribe" description="Subscribe to my newsletter." />

      <SubscribeSection />
    </div>
  );
}
