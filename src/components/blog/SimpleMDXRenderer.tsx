"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";

interface SimpleMDXRendererProps {
  content: string;
}

export function SimpleMDXRenderer({ content }: SimpleMDXRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      Prism.highlightAllUnder(contentRef.current);
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="mdx-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: formatMDXContent(content) }}
    />
  );
}

function formatMDXContent(content: string): string {
  return content
    .replace(/\r\n/g, '\n')
    // Code block
    .replace(/```(\w+)?([\s\S]*?)```/gim, (_, lang, code) => {
      const language = lang ? lang : 'javascript';
      const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<pre class="rounded-lg my-4 overflow-x-auto"><code class="language-${language}">${escaped}</code></pre>`;
    })
    // Inline code
    .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">$1</code>')
    // Headings
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold my-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold my-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold my-2">$1</h3>')
    // Bold & italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img class="rounded-lg my-4 max-w-full h-auto" alt="$1" src="$2" />')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a class="text-blue-600 hover:underline" href="$2">$1</a>')
    // List
    .replace(/^- (.*$)/gim, '<ul class="list-disc pl-6 my-4"><li class="my-1">$1</li></ul>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p class="my-4 leading-relaxed">')
    .replace(/\n/gim, '<br>');
}
