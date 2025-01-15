import { fetchMarkdown } from "@/lib/utils";
import { Markdown } from "../Markdown";

export default async function InstallationPage() {
const markdown = await fetchMarkdown(
      `/INSTALLATION.md`
    );

  return (
    <div className="space-y-6 mt-8">
          <Markdown>
          {markdown}  
          </Markdown>
        </div>
  );
}
