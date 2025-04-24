import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "rhys's desktop",
  description: "rhys's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
