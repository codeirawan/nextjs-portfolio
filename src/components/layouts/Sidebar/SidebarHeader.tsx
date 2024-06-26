import { PROFILE_PICTURE_URL } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import ThemeButton from "@/components/elements/ThemeButton";

export default function SidebarHeader() {
  return (
    <header
      className={clsx(
        "m-auto w-fit",
        "flex items-center justify-between",
        "md:flex-col",
        "lg:mb-12 lg:w-52 lg:flex-row",
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={PROFILE_PICTURE_URL}
          alt="Image Profile"
          className="border__color h-11 w-11 rounded-full"
          width={100}
          height={100}
        />

        <div className="hidden flex-col lg:flex">
          <h2 className="primary text-base font-medium md:text-lg">codeirawan</h2>
          <p className="secondary text-sm md:text-base">fullstack dev</p>
        </div>
      </div>

      <ThemeButton />
    </header>
  );
}
