import { format } from "date-fns";
import BreakLine from "@/components/elements/BreakLine";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { getBlogBySlug } from "@/lib/mdx";
import BlogClientWrapper from "@/components/blog/BlogClientWrapper";

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, title, releaseDate, views } = await getBlogBySlug(slug);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <section className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            Written on{" "}
            {releaseDate ? format(new Date(releaseDate), "MMMM dd, yyyy") : "Unknown"} by IRAWAN
          </p>
          <div className="flex gap-4 text-sm text-gray-600 mt-1">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span>
                {releaseDate ? format(new Date(releaseDate), "MMMM dd, yyyy") : "Unknown"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span>{views} views</span>
            </div>
          </div>
        </header>

        <BreakLine decoration="border-dashed" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <article className="prose prose-lg max-w-none lg:col-span-3">
            {/* Render content with proper Markdown processing if available */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>

          <aside className="lg:col-span-1">
            <BlogClientWrapper />
          </aside>
        </div>
      </section>
    </div>
  );
}
