import { Markdown } from "@/components/Markdown";
import { fetchMarkdown } from "@/lib/utils";
import React from "react";

const page = async () => {
  const markdown = await fetchMarkdown(
  `/INTRODUCTION.md`
  );
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default page;
