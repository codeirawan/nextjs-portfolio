"use client";

import * as React from "react";
import BlogCard from "@/components/cards/BlogCard";
import { BlogMeta } from "@/types";
import clsx from "clsx";
import { motion } from "framer-motion";
import Search from "../Search";

export default function BlogSection({ blogs }: { blogs: BlogMeta[] }) {
  const [search, setSearch] = React.useState<string>("");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [sortedBlogs, setSortedBlogs] = React.useState<BlogMeta[]>([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState<BlogMeta[] | null>(
    null,
  );
  const [loading, setLoading] = React.useState(true);

  const sortBlogsByDate = React.useCallback(() => {
    if (!Array.isArray(blogs)) return;
    const sorted = [...blogs].sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    );
    setSortedBlogs(sorted);
    setLoading(false);
  }, [blogs]);

  React.useEffect(() => {
    sortBlogsByDate();
  }, [sortBlogsByDate]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const checkTagged = (tag: string) => selectedTags.includes(tag);

  const checkDisabled = (_tag: string) => false;

  React.useEffect(() => {
    if (!sortedBlogs.length) return;
    let filtered = sortedBlogs;

    if (search) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search) ||
          blog.description.toLowerCase().includes(search),
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((blog) =>
        selectedTags.every((tag) => blog.tags.includes(tag)),
      );
    }

    setFilteredBlogs(filtered);
  }, [search, selectedTags, sortedBlogs]);

  return (
    <section>
      <Search
        search={search}
        handleSearch={handleSearch}
        toggleTag={toggleTag}
        checkTagged={checkTagged}
        checkDisabled={checkDisabled}
      />

      {loading || filteredBlogs === null ? (
        <div className="pb-12 pt-20 text-center">Loading blogs...</div>
      ) : filteredBlogs.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.image}
              tags={blog.tags}
              title={blog.title}
              readingTime={blog.readingTime}
              views={blog.views}
              releaseDate={blog.releaseDate}
              description={blog.description}
              slug={blog.slug.current}
            />
          ))}
        </motion.ul>
      ) : (
        <div
          className={clsx(
            "pb-12 pt-20",
            "lg:flex lg:justify-center",
            "lg:h-80 lg:pb-0 lg:pt-8",
          )}
        >
          <h2
            className={clsx(
              "gradient__text",
              "m-auto w-fit",
              "text-lg  font-bold",
              "md:text-xl",
            )}
          >
            Sorry, not found :(
          </h2>
        </div>
      )}
    </section>
  );
}
