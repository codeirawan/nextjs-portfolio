import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import PageSpeed from "./PageSpeed";

export const metadata: Metadata = {
  title: "Audits X-codeirawan",
  description:
    "Explore real-time performance reports for codeirawan.vercel.app, powered by the Pagespeed API",
  alternates: {
    canonical: "https://codeirawan.vercel.app/audits",
  },
};

export default function Audits() {
  return (
    <div className="p-8">
      <PageTitle title="Audits" description="Real-time performance report." />
      <PageSpeed />
    </div>
  );
}
