import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Career from "./Career";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "codeirawan",
  description:
    "Personal website and blog by codeirawan. Showcase of my projects, thoughts and skills on website development.",
  alternates: {
    canonical: "https://codeirawan.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <PageTitle
          title="Home"
          description="Introduction and Professional Career Journey."
        />
        <Header />
        <Hero />
        <Career />
        <Stacks />
      </div>
    </>
  );
}
