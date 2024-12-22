"use client";

import React from "react";

const page = ({ params }: { params: { sponsor: string } }) => {
  return <div>{params.sponsor}</div>;
};

export default page;
