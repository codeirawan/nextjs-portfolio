"use client";
import { fetcher } from "@/services/fetcher";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import useSWR from "swr";

export default function GithubCard({ display }: { display: string }) {

  return (
    <Link
      target="_blank"
      rel="noopener noreferer"
      href={"https://github.com/codeirawan"}
      className={clsx(
        display,
        "cursor-pointer",
        "relative w-fit max-w-xs",
        "m-auto p-4",
        "items-center gap-4",
        "border__color rounded-md",
        "lg:w-52",
      )}
    >
      <div className="w-16">
        <SiGithub size={64} color={"#000000"} />
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {"Repository"}
        </p>
        <p className="mt-1 text-xs">
          {"Github"}
        </p>
      </div>
    </Link>
  );
}
