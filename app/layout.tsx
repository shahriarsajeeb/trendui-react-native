import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TrendUI - Modern UI for React Native',
  description:
    'A modern UI library for React Native, supporting Tailwind CSS and Stylesheets.',
  keywords: 'TrendUI, React Native, Tailwind, Styling, Expo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={`${inter.className}  mx-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
