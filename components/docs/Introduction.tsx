import { fetchMarkdown } from "@/lib/utils";

import { Markdown } from "../Markdown";

export async function Introduction() {
  const markdown = await fetchMarkdown(`/INTRODUCTION.md`);

  return (
    <div className="mt-8 space-y-6">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
