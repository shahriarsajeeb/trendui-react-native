import { Sidebar } from "@/components/docs/sidebar";
import { SiteHeader } from "@/components/docs/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen max-w-screen-xl mx-auto">
      {/* Left Sidebar */}
      <aside className="hidden lg:block md:block fixed left-0 top-0 z-30 w-full sm:w-[25%] md:w-[20%] lg:w-[250px] h-full border-r bg-background">
        <ScrollArea className="h-full">
          <Sidebar />
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* <SiteHeader /> */}
        <div className="container max-w-full sm:max-w-3xl py-6 lg:py-10 mx-auto">
          {children}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block md:block fixed right-0 top-0 z-30 w-full sm:w-[25%] md:w-[20%] lg:w-[250px] h-full border-l bg-background">
        <div className="sticky top-0 p-4 space-y-4">
          <h2 className="text-lg font-semibold text-muted-foreground">
            TrendUI Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#link1" className="text-primary hover:underline">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#link2" className="text-primary hover:underline">
                Components
              </a>
            </li>
            <li>
              <a href="#link3" className="text-primary hover:underline">
                Themes
              </a>
            </li>
            <li>
              <a href="#link4" className="text-primary hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#link5" className="text-primary hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
