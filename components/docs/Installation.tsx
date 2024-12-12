import React from "react";
import { fetchMarkdown } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
// import MarkdownRenderer from "../MarkdownRender";
import { Markdown } from "../Markdown";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function InstallationPage() {
  const markdown = await fetchMarkdown("README.md");

  return (
    <div className="p-6" id="installation">
      <SectionHeader title="Installation" />
      {/* <MarkdownRenderer markdown={markdown} /> */}
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
