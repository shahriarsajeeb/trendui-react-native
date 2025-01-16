"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import useActiveHeadingVariableThreshold from "@/hooks/useVariableScrollThreshold";
import { fetchSectionFromMarkdown } from "@/lib/utils";

interface SectionsType {
  heading: string;
  content: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function RightSidebar() {
  const pathname = usePathname();
  const [sections, setSections] = useState<SectionsType[]>([]);
  const activeSection = useActiveHeadingVariableThreshold(sections);

  const cleanedPath = pathname.replace(/^\/docs(?:\/components)?\//, "");

  useEffect(() => {
    async function catchPathName() {
      const specialPaths = ["cli", "introduction", "installation"];
      const isSpecial = specialPaths.includes(cleanedPath);

      const filePath = isSpecial
        ? `/${cleanedPath.toUpperCase()}.md`
        : `/src/components/${cleanedPath}/README.md`;

      try {
        const data: any = await fetchSectionFromMarkdown(filePath);
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    }

    catchPathName();
  }, [cleanedPath, pathname]);

  return (
    <aside className="fixed right-0 top-20 z-30 hidden size-full border-l bg-background sm:w-1/4 md:block md:w-1/5 lg:block lg:w-[250px]">
      <div className="sticky top-0 space-y-4 p-4">
        <ul className="space-y-2">
          {sections.map((section) => {
            const slug = slugify(section.heading);
            const isActive = slug === activeSection;

            return (
              <li key={section.heading}>
                <Link
                  href={`#${slug}`}
                  className={
                    isActive
                      ? "font-bold text-blue-500"
                      : "text-primary opacity-70"
                  }
                >
                  {section.heading}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
