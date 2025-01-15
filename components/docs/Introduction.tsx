import { fetchMarkdown } from "@/lib/utils";
import { Markdown } from "../Markdown";
import SectionHeader from "./SectionHeader";

export async function Introduction({ params }: { params: { component: string } }) {
   const markdown = await fetchMarkdown(
      `/src/components/${params.component}/README.md`
    );

  return (
    <div className="space-y-6 mt-8 max-w-prose px-4 sm:px-6 lg:px-8">
      {/* <Markdown>
        
      </Markdown> */}
    </div>
  );
}
