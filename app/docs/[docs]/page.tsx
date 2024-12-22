import InstallationPage from "@/components/docs/Installation";
import React from "react";

const page = async ({ params }: { params: Promise<{ docs: string }> }) => {
  return (
    <div>
      <InstallationPage />
    </div>
  );
};

export default page;
