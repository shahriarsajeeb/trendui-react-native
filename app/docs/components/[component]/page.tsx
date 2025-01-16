import { Markdown } from "@/components/Markdown";
import { fetchMarkdown } from "@/lib/utils";

const page = async ({ params }: { params: any }) => {
  const markdown = await fetchMarkdown(
    `/src/components/${params.component}/README.md`
  );
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default page;