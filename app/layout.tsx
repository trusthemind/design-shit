import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.scss";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Design App",
  description: "Task for Design Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
