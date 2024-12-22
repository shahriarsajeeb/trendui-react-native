"use client";

import React from "react";

const page = ({ params }: { params: { component: string } }) => {
  return <div>{params.component}</div>;
};

export default page;
