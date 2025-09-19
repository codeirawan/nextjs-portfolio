import { format } from "date-fns";
import BreakLine from "@/components/elements/BreakLine";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { getBlogBySlug } from "@/lib/mdx";
import BlogClientWrapper from "@/components/blog/BlogClientWrapper";
import { SimpleMDXRenderer } from "@/components/blog/SimpleMDXRenderer";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, title, releaseDate, views, tags, readingTime } =
    await getBlogBySlug(slug);

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8">
      <section className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h1>

          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-2 text-sm text-gray-500">
            Written on{" "}
            {releaseDate
              ? format(new Date(releaseDate), "MMMM dd, yyyy")
              : "Unknown"}{" "}
            by IRAWAN
          </p>
          <div className="mt-1 flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span>{readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span>{views} views</span>
            </div>
          </div>
        </header>

        <BreakLine decoration="border-dashed" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <article className="max-w-none lg:col-span-3">
            <SimpleMDXRenderer content={content} />
          </article>

          <aside className="lg:col-span-1">
            <BlogClientWrapper />
          </aside>
        </div>
      </section>
    </div>
  );
}
