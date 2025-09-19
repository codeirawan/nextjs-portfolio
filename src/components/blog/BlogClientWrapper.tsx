"use client";

import SubscribeCard from "@/components/cards/SubscribeCard";
import Comment from "@/components/elements/Comment";
import DonateBox from "@/components/elements/DonateBox";

export default function BlogClientWrapper() {
  return (
    <>
      {/* <DonateBox classname="w-64 lg:hidden" /> */}
      <SubscribeCard />
      {/* <Comment /> */}
    </>
  );
}
