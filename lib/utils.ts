import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Clock, Globe, Network, Type, Variable, Wand2 } from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getMarkdownContent(file:string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/ekilie/vint-lang/main/${file}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch Markdown: ${res.statusText}`);
  }
  const markdown = await res.text();
  return markdown;
}

export async function fetchMarkdown(file:string) {
  try {
    const markdown = await getMarkdownContent(file);
    return markdown;
  } catch (error) {
    console.error("Failed to fetch markdown:", error);
    return "Error fetching content. Please try again later.";
  }
}

export const features = [
  {
    name: 'Simple Syntax',
    description: 'Write clean, readable code with an intuitive syntax inspired by modern programming practices.',
    icon: Type,
  },
  {
    name: 'Built-in Networking',
    description: 'Powerful networking capabilities with the built-in net module for HTTP operations.',
    icon: Network,
  },
  {
    name: 'Time Operations',
    description: 'Comprehensive time manipulation and formatting with the native time module.',
    icon: Clock,
  },
  {
    name: 'Dynamic Typing',
    description: 'Flexible type system with built-in type conversion and checking capabilities.',
    icon: Variable,
  },
  {
    name: 'Go-Powered',
    description: 'Built with Go, ensuring high performance and reliable execution.',
    icon: Wand2,
  },
  {
    name: 'Global Community',
    description: 'Join a growing community of developers building with VintLang.',
    icon: Globe,
  },
]

export const taupeTheme = {
  'code[class*="language-"]': {
    color: '#3c3a36', // Dark taupe color for text
    background: 'none',
    fontFamily: 'monospace',
    fontSize: '1em',
    lineHeight: '1.5',
    whiteSpace: 'pre',
    wordWrap: 'normal',
    tabSize: '4',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    background: '#ebe3d7', // Lighter taupe for the background
    padding: '16px',
    borderRadius: '5px',
    overflow: 'auto',
  },
  'token.keyword': {
    color: '#a15c1c', // Earthy brown for keywords
  },
  'token.string': {
    color: '#6a493d', // Soft brownish color for strings
  },
  'token.comment': {
    color: '#928e85', // Faded taupe gray for comments
    fontStyle: 'italic',
  },
  'token.operator': {
    color: '#3c3a36', // Darker taupe for operators
  },
  'token.function': {
    color: '#4b3e31', // A warm brown for function names
  },
  'token.variable': {
    color: '#2f2a27', // A darker taupe for variable names
  },
  'token.number': {
    color: '#d49952', // A slightly golden brown for numbers
  },
}

