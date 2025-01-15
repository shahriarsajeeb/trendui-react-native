import { fetchMarkdown } from "@/lib/utils";
import { Markdown } from "../Markdown";

export async function Introduction() {
   const markdown = await fetchMarkdown(
      `/INTRODUCTION.md`
    );

  return (
    <div className="space-y-6 mt-8">
      <Markdown>
      {markdown}  
      </Markdown>
    </div>
  );
}
