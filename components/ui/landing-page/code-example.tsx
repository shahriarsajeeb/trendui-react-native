"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// Feature data with code examples
const features = [
  {
    id: 1,
    title: "Server Components",
    description:
      "Server Components let you write UI that can be rendered and optionally cached on the server.",
    code: `// app/page.tsx
export default function Page() {
  const data = await getData()
  return (
    <main>
      <h1>{data.title}</h1>
      {data.content}
    </main>
  )
}`,
  },
  {
    id: 2,
    title: "Client Components",
    description:
      "Client Components enable you to add client-side interactivity to your application.",
    code: `'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`,
  },
  {
    id: 3,
    title: "Route Handlers",
    description:
      "Route Handlers allow you to create custom request handlers for a given route.",
    code: `// app/api/route.ts
export async function GET() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
 
  return Response.json({ data })
}`,
  },
  {
    id: 4,
    title: "Server Actions",
    description:
      "Server Actions enable server-side data mutations within React Components.",
    code: `// app/actions.ts
'use server'
 
export async function createItem(formData: FormData) {
  const item = await db.items.create({
    data: {
      name: formData.get('name'),
    },
  })
  return item
}`,
  },
  {
    id: 5,
    title: "Metadata API",
    description:
      "The Metadata API allows you to define metadata for your application.",
    code: `// app/layout.tsx
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
  openGraph: {
    title: 'My App',
    description: 'My app description',
  },
}`,
  },
];

export default function CodeExample() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    // Highlight the code whenever the selected feature changes
    const highlighted = hljs.highlight(selectedFeature.code, {
      language: "typescript",
      ignoreIllegals: true,
    }).value;
    setHighlightedCode(highlighted);
  }, [selectedFeature.code]);

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr,2fr]">
          {/* Features List */}
          <div className="space-y-2 w-[90px] h-[100vh] border dark:border-[#ffffff2e] border-[#00000015] bg-transparent sticky top-[80px] left-0 rounded-l-lg">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`w-full rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors
                  ${
                    selectedFeature.id === feature.id
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature Description and Code */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div className="rounded-lg bg-zinc-800 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedFeature.title}
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    {selectedFeature.description}
                  </p>
                </div>
                <div className="rounded-lg bg-[#0d1117] p-6">
                  <pre className="overflow-x-auto">
                    <code
                      className="hljs language-typescript"
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
