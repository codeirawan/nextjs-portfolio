import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogMeta, BlogItem } from "@/types";

const rootDirectory = path.join(process.cwd(), "src", "content", "blog");

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function getRandomViews(min = 100, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomReadingTime(min = 3, max = 12) {
  return `${Math.floor(Math.random() * (max - min + 1)) + min} min read`;
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  const files = await fs.promises.readdir(rootDirectory);

  const blogs: BlogMeta[] = await Promise.all(
    files
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName, index) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fileContent = await fs.promises.readFile(
          path.join(rootDirectory, fileName),
          "utf-8"
        );
        const { data, content } = matter(fileContent);

        return {
          _id: `${index}`,
          title: data.title,
          description: data.description || content.substring(0, 160),
          tags: data.tags || [],
          image: data.image || "/blog.jpg",
          releaseDate: data.date || getTodayDate(),
          readingTime: data.readingTime ?? getRandomReadingTime(),
          views: data.views ?? getRandomViews(),
          slug: { _type: "slug", current: slug },
        };
      })
  );

  return blogs.sort((a, b) =>
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );
}

export async function getBlogBySlug(slug: string): Promise<BlogItem> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }

  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    _id: slug,
    title: data.title,
    description: data.description || "",
    tags: data.tags || [],
    image: data.image || "/default-blog.jpg",
    releaseDate: data.date || getTodayDate(),
    readingTime: data.readingTime ?? getRandomReadingTime(),
    views: data.views ?? getRandomViews(),
    slug: { _type: "slug", current: slug },
    content,
  };
}