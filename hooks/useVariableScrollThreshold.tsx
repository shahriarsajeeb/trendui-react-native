import { useEffect, useMemo, useState } from "react";

interface SectionType {
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

export default function useVariableScrollThreshold(sections: SectionType[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const thresholds = useMemo(() => {
    const map: Record<string, number> = {};
    for (const sec of sections) {
      const slug = slugify(sec.heading);
      const wordCount = sec.content.trim().split(/\s+/).length;
      console.log(wordCount);
      const threshold = wordCount < 100 ? 400 : 100;
      map[slug] = threshold;
    }
    return map;
  }, [sections]);

  useEffect(() => {
    function handleScroll() {
      // Grab all <h2> with an id
      const headings = document.querySelectorAll<HTMLHeadingElement>("h2[id]");
      let lastInView: string | null = null;

      // We loop through each heading in order
      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
        const slug = heading.id;

        // 2) For each heading, look up the threshold from our map
        //    (defaults to 120 if not found).
        const sectionThreshold = thresholds[slug] ?? 120;

        // If top is less than that threshold, it's "in view"
        if (rect.top < sectionThreshold) {
          lastInView = slug;
        } else {
          // As soon as we find one that's not in view, we stop.
          break;
        }
      }

      // If none were in range, keep the old activeSection
      // (unless it's never been set)
      let newActive = lastInView ?? activeSection;

      // If still no active, default to the first heading
      if (!newActive && headings.length > 0 && !activeSection) {
        newActive = headings[0].id;
      }

      if (newActive !== activeSection) {
        setActiveSection(newActive);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, thresholds, activeSection]);

  return activeSection;
}
