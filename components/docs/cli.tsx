import { fetchMarkdown } from "@/lib/utils";
import { Markdown } from "../Markdown";

export default async function CLIPage() {
const markdown = await fetchMarkdown(
      `/CLI.md`
    );

  return (
    <div className="space-y-6 mt-8">
          <Markdown>
          {markdown}  
          </Markdown>
        </div>
  );
}
