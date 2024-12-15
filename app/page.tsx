import { Suspense } from "react";
import { LandingPage } from "@/components/landing-page";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LandingPage />
    </Suspense>
  );
}
