"use client";

import React from "react";

const page = ({ params }: { params: { docs: string } }) => {
  return <div>{params.docs}</div>;
};

export default page;
