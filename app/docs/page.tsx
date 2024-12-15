import { Metadata } from "next";
import { Introduction } from "@/components/docs/Introduction";
import InstallationPage from "@/components/docs/Installation";

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <Introduction />
      <InstallationPage/>
    </div>
  );
}
