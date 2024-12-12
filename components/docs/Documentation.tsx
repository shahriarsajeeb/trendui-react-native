import React from "react";
import { fetchMarkdown } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
// import MarkdownRenderer from "../MarkdownRender";
import { Markdown } from "../Markdown";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function Documentation() {
  const markdown = await fetchMarkdown("get-started.md");

  return (
    <div className="p-6" id="docs">
      <SectionHeader title="Documentation" />
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
