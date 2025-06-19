import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const ubuntu = Fira_Code({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh's portfolio",
  description: "Harsh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} dark antialiased`}>
        <div className="flex justify-center">
          <div className="w-10/12 sm:p-8 md:p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
