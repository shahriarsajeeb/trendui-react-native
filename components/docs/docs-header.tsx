import SectionHeader from "./SectionHeader";

export function DocsHeader() {
  return (
    <div className="space-y-4 mt-10" id="documentation">
      <SectionHeader title="Documentation" />
      <p className="text-xs md:text-xl text-muted-foreground">
        Welcome to the VintLang v2 documentation! VintLang&apos;s atomic
        approach to programming scales from a simple{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          useState
        </code>{" "}
        replacement to an enterprise application with complex requirements.
      </p>
    </div>
  );
}
