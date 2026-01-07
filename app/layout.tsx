import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Shelar - Portfolio",
  description: "Software Developer passionate about creating elegant solutions to complex problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark antialiased">
        <div className="h-screen flex flex-col overflow-hidden bg-background">
          <div className="flex-1 flex overflow-hidden">
            {children}
          </div>
          {/* Status Bar */}
          <div className="ide-status-bar flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-4">
              <span>TypeScript React</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
