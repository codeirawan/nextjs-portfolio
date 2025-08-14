"use client";
import useSWR from "swr";
import clsx from "clsx";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";
import { fetcher } from "@/services/fetcher";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants";

export default function VisitCard({ display }: { display: string }) {
  const { data } = useSWR("/api/visit", fetcher);

  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  const todayViews = data?.viewsPerDay?.[today] || 0;
  const totalViews = data?.totalViews || 0;

  return (
    <Link
      href="#"
      className={clsx(
        display,
        "m-auto flex w-fit max-w-xs cursor-pointer items-center gap-4 rounded-md p-4 py-2 shadow-md lg:w-52",
      )}
      style={{
        background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
      }}
    >
      <div className="flex h-16 w-16 items-center justify-center gap-[-6px]">
        <HiOutlineEye size={36} className="-ml-2 text-black" />
        <HiOutlineEye size={36} className="-mr-2 text-black" />
      </div>

      <div className="flex-1 text-black">
        <p className="font-medium leading-tight">Visits</p>
        <p className="mt-1 text-xs">Today: {todayViews}</p>
        <p className="mt-1 text-xs">Total: {totalViews}</p>
      </div>
    </Link>
  );
}
