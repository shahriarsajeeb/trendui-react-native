import React from "react";

interface SectionHeaderProps{
    title:string
}

const SectionHeader = ({title}:SectionHeaderProps) => {
  return (
    <h1 className="text-base md:text-6xl font-bold tracking-tight dark:text-neutral-300">
      {title}
    </h1>
  );
};

export default SectionHeader;
