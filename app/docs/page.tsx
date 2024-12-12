import { Metadata } from "next";
import { DocsHeader } from "@/components/docs/docs-header";
import { Features } from "@/components/docs/features";
import { Core } from "@/components/docs/core";
import { Introduction } from "@/components/docs/Introduction";
import Installation from "@/components/docs/Installation";
import Documentation from "@/components/docs/Documentation";

export const metadata: Metadata = {
  title: "Documentation - VintLang",
  description:
    "Documentation for VintLang - A modern programming language built with Go",
};

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <Introduction />
      <Installation/>
      <Documentation/>
      {/* <Features /> */}
      {/* <Core /> */}
    </div>
  );
}
