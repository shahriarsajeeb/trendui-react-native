"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function LandingPage() {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <h1>landing page</h1>
    </ThemeProvider>
  );
}
