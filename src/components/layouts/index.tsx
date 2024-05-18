import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants";
import Bottombar from "./Bottombar";
import clsx from "clsx";
import Footer from "./Footer";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "./Sidebar";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color={PRIMARY_COLOR}
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow={`0 0 10px ${PRIMARY_COLOR}, 0 0 5px ${SECONDARY_COLOR}`}
      />

      <div
        className={clsx(
          "md:flex",
          "lg:m-auto lg:max-w-5xl",
          "lg:justify-center",
        )}
      >
        <Sidebar />

        <div className="lg:max-w-5xl">
          <main>{children}</main>
          <Bottombar />
          <Footer />
        </div>
      </div>
    </>
  );
}
