"use client"

import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-9 bg-background border-0 ring-1 ring-border focus-visible:ring-2"
      />
    </div>
  )
}

