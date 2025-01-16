"use client";

import Link from "next/link";
import { Children, ReactNode, memo, useEffect, useState } from "react";

import { Clipboard, ClipboardCheck } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import useActiveHeading from "@/hooks/useActiveHeading";

import { Button } from "./ui/button";

function getHeadingText(children: ReactNode): string {
  // Flatten child nodes, pick out only string bits
  const textBits = Children.map(children, (child) =>
    typeof child === "string" ? child : "",
  );
  // Join all string bits together
  return (textBits || []).join("").trim();
}

function slugify(text: string) {
  return text
    ?.toLowerCase()
    ?.replace(/[^\w\s-]/g, "")
    ?.trim()
    ?.replace(/\s+/g, "-");
}

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  const { activeSection, setActiveSection } = useActiveHeading();

  useEffect(() => {
    function handleScroll() {
      const headings = document.querySelectorAll<HTMLHeadingElement>("h2[id]");
  
      // Keep track of the last heading that’s above our threshold
      let lastInView: string | null = null;
  
      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
        // If top < 150, consider it "in view" for our purposes
        if (rect.top < 120) {
          lastInView = heading.id;
        } else {
          // As soon as we find a heading that isn't in that range,
          // we can stop checking further headings
          break;
        }
      }
  
      // If we found any heading, use the last one. Otherwise fallback to the old active.
      let newActive = lastInView ?? activeSection;
  
      // If still no heading is in view and we have none active, pick the first heading
      if (!newActive && headings.length > 0 && !activeSection) {
        newActive = headings[0].id;
      }
  
      if (newActive !== activeSection) {
        setActiveSection(newActive);
      }
    }
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const components = {
    h1: ({ children, ...props }: any) => {
      const headingText = getHeadingText(children);
      const slug = slugify(headingText);

      return (
        <h1
          id={slug}
          className="mb-4 mt-6 border-b border-neutral-300 pb-2 font-bold text-neutral-800 dark:border-neutral-700 dark:text-neutral-100 md:text-3xl"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: any) => {
      const headingText = getHeadingText(children);
      const slug = slugify(headingText);
      return (
        <h2
          id={slug}
          className="mb-3 mt-5 font-semibold text-neutral-800 dark:text-neutral-200 md:text-2xl"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: any) => {
      const headingText = getHeadingText(children);
      const slug = slugify(headingText);
      return (
        <h3
          id={slug}
          className="mb-2 mt-4 text-sm font-medium text-neutral-800 dark:text-neutral-200 md:text-xl"
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: ({ children, ...props }: any) => (
      <p
        className="mb-4 max-w-prose text-[9px] leading-6 text-neutral-700 dark:text-neutral-300 md:text-base"
        {...props}
      >
        {children}
      </p>
    ),
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const codeContent = String(children).trim();

      return !inline && match ? (
        <div className="group relative">
          <pre
            {...props}
            className={`${className} mt-3 w-[90%] max-w-prose overflow-x-auto rounded-lg bg-zinc-100 p-4 text-[9px] dark:bg-[#18181B] md:max-w-full md:text-sm`}
          >
            <code className={match[1]}>{children}</code>
          </pre>
          <Button
            onClick={() => copyToClipboard(codeContent)}
            className="absolute right-2 top-2 rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-800 dark:text-white md:text-sm"
          >
            {!isCopied ? <Clipboard /> : <ClipboardCheck />}
          </Button>
        </div>
      ) : (
        <code
          className={`${className} rounded-md bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800 md:text-sm`}
          {...props}
        >
          {children}
        </code>
      );
    },
    ol: ({ children, ...props }: any) => (
      <ol
        className="mb-4 ml-6 list-outside list-decimal text-xs text-neutral-700 dark:text-neutral-300 md:text-base"
        {...props}
      >
        {children}
      </ol>
    ),
    ul: ({ children, ...props }: any) => (
      <ul
        className="mb-4 ml-6 list-outside list-disc text-neutral-700 dark:text-neutral-300"
        {...props}
      >
        {children}
      </ul>
    ),
    li: ({ children, ...props }: any) => (
      <li className="py-1" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        className="mb-4 border-l-4 border-neutral-300 pl-4 italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
        {...props}
      >
        {children}
      </blockquote>
    ),
    strong: ({ children, ...props }: any) => (
      <span className="font-semibold" {...props}>
        {children}
      </span>
    ),
    a: ({ children, ...props }: any) => (
      <Link
        className="text-green-500 hover:underline"
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </Link>
    ),
    hr: ({ ...props }: any) => (
      <hr
        className="my-6 border-t border-neutral-300 dark:border-neutral-700"
        {...props}
      />
    ),
    table: ({ children, ...props }: any) => (
      <table
        className="mb-4 w-full table-auto border-collapse border border-neutral-300 text-left dark:border-neutral-700"
        {...props}
      >
        {children}
      </table>
    ),
    th: ({ children, ...props }: any) => (
      <th
        className="border border-neutral-300 bg-neutral-100 px-4 py-2 font-semibold dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td
        className="border border-neutral-300 px-4 py-2 dark:border-neutral-700"
        {...props}
      >
        {children}
      </td>
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
