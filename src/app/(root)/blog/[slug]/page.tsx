import SubscribeCard from "@/components/cards/SubscribeCard";
import BreakLine from "@/components/elements/BreakLine";
import Comment from "@/components/elements/Comment";
import DonateBox from "@/components/elements/DonateBox";
import { REVALIDATE_INTERVAL } from "@/constants";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { getBlog } from "@/services/blog";
import { BlogItem } from "@/types";
import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import Aside from "./Aside";

export const revalidate = REVALIDATE_INTERVAL;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = (await getBlog(params.slug)) as BlogItem[];
  const {
    title,
    description,
    slug: { current },
  } = blog[0];

  return {
    title: `${title} X-codeirawan`,
    description: description,
    openGraph: {
      images: DEFAULT_METADATA.image,
      url: `https://codeirawan.vercel.app/blog/${current}`,
      siteName: DEFAULT_METADATA.siteName,
      locale: DEFAULT_METADATA.locale,
      type: "article",
      authors: "codeirawan",
    },
    keywords: title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${current}`,
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {

  return (
    <div className="p-8">
      <section>

        <h1 className="primary mt-4 text-2xl font-bold md:text-3xl"></h1>

        <p className="secondary mb-4 mt-1 text-sm font-medium leading-relaxed">
          Written on {format(new Date(), "MMMM dd, yyyy")} by IRAWAN
        </p>

        <div className="flex gap-2 text-sm font-medium">
          <div className="flex items-center gap-1">
            <HiOutlineClock className="text-base" />
            <span className="gradient__text">{}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineEye className="text-base" />
            <span className="gradient__text">
               views
            </span>
          </div>
        </div>

        <BreakLine decoration="border-dashed" />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
        </div>

        <DonateBox classname="w-64 lg:hidden" />

        <SubscribeCard />

        <Comment />
      </section>
    </div>
  );
}
