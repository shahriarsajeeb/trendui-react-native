import SectionHeader from "./SectionHeader";

export function Introduction() {
  return (
    <div className="space-y-4 mt-10 max-w-prose" id="">
      <SectionHeader title="Introduction" />
      <p className="text-xs md:text-xl text-muted-foreground">
        VintLang is a lightweight, expressive programming language designed to
        simplify modern development. With its clean syntax and powerful core
        features, VintLang empowers developers to build anything from quick
        scripts to robust enterprise-grade systems effortlessly.
      </p>
      <p className="text-xs md:text-xl text-muted-foreground">
        Whether you&apos;re automating tasks, developing APIs, or crafting
        interactive applications, VintLang&apos;s modular and atomic principles
        ensure scalability and maintainability for projects of any size.
      </p>
    </div>
  );
}
