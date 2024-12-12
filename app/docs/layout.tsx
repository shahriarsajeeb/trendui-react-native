import { Sidebar } from "@/components/docs/sidebar";
import { SiteHeader } from "@/components/docs/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="hidden lg:block md:block fixed left-0 top-0 z-30 w-[250px] sm:w-[300px] md:w-[380px] h-full border-r bg-background">
        <ScrollArea className="h-full">
          <Sidebar />
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-0 sm:pl-[250px] md:pl-[380px]">
        <SiteHeader />
        <div className="container max-w-3xl py-6 lg:py-10">{children}</div>
      </main>
    </div>
  );
}
