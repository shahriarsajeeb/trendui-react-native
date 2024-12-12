import SectionHeader from "./SectionHeader";

export function Introduction() {
  return (
    <div className="space-y-4 mt-10 max-w-prose" id="">
      <SectionHeader title="Introduction" />
      <p className="text-xs md:text-xl text-muted-foreground">
        TrendUI is a modern, lightweight UI library for React Native that
        supports both Tailwind CSS and traditional Stylesheets, offering
        developers flexibility and scalability when building mobile
        applications.
      </p>
      <p className="text-xs md:text-xl text-muted-foreground">
        Whether you're creating simple UIs or complex enterprise-grade mobile
        apps, TrendUI's clean syntax and powerful core components ensure a
        smooth development experience with responsive, beautiful designs.
      </p>
    </div>
  );
}
