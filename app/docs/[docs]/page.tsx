import CLIPage from "@/components/docs/cli";
import InstallationPage from "@/components/docs/Installation";
import { Introduction } from "@/components/docs/Introduction";


const page = async ({ params }: { params: Promise<{ docs: string }> }) => {
  const activeRoute = (await params).docs;

  return (
    <div>
      {activeRoute === "introduction" && <Introduction />}
      {activeRoute === "installation" && <InstallationPage />}
      {activeRoute === "cli" && <CLIPage />}
    </div>
  );
};


export default page;
