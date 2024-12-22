import SectionHeader from "./SectionHeader";

export function Introduction() {
  return (
    <div className="space-y-6 mt-8 max-w-prose px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Introduction" />
      <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
        TrendUI is a modern, lightweight UI library for React Native that
        supports both Tailwind CSS and traditional Stylesheets, offering
        developers flexibility and scalability when building mobile
        applications.
      </p>
      <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
        Whether you&apos;re creating simple UIs or complex enterprise-grade mobile
        apps, TrendUI&apos;s clean syntax and powerful core components ensure a
        smooth development experience with responsive, beautiful designs.
      </p>
    </div>
  );
}
