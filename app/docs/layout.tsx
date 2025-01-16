import { Sidebar } from "@/components/docs/sidebar";
import Header from "@/components/header/header";
import RightSidebar from "@/components/right.sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocsLayoutProps {
  children: React.ReactNode;
}
export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-screen max-w-screen-xl">
        {/* Left Sidebar */}
        <aside className="fixed left-0 top-0 z-30 hidden size-full border-r bg-background sm:w-[25%] md:block md:w-1/5 lg:block lg:w-[250px]">
          <ScrollArea className="h-full">
            <Sidebar />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* <SiteHeader /> */}
          <div className="container mx-auto max-w-full py-6 sm:max-w-3xl lg:py-10">
            {children}
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </>
  );
}
