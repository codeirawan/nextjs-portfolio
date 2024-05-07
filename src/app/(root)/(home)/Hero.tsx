"use client";
import BreakLine from "@/components/elements/BreakLine";
import Ping from "@/components/elements/Ping";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1
        className={clsx(
          "primary",
          "mb-4",
          "text-xl font-bold",
          "min-[347px]:text-2xl md:text-3xl",
        )}
      >
        Hello World, <span className="gradient__text">I&apos;m IRAWAN</span>
        <div className="ml-1 inline-block animate-waving-hand">👋</div>
      </h1>

      <p className="secondary mb-4 text-sm leading-relaxed md:text-lg">
        an experienced Front-End Web Developer with expertise in <span className="gradient__text"> React & Vue. </span><br />
        With over 4 years of hands-on experience, I excel in crafting polished websites.
        Proficient in <span className="gradient__text"> Laravel </span> for backend and full-stack development. <br />
        Let&apos;s collaborate and bring your ideas to life.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="primary text-sm md:text-lg">
          Available for hire
        </p>
      </div>

      <Link
        href="/contact"
        aria-label="Contact Me"
        className={clsx(
          "primary border__gradient",
          "flex items-center gap-3",
          "w-fit rounded-md p-3",
          "text-sm font-bold md:text-lg",
          "lg:mb-[39px]",
        )}
      >
        <SiGmail />
        Contact Me
      </Link>
      <BreakLine />
    </motion.section>
  );
}
