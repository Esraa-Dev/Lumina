import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { AppContextProvider } from "./context/AppContext";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "LUMINA",
  description: "Transform your imagination into stunning visuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-dark text-white antialiased`}>
        <AppContextProvider>
          <Navbar />
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
  );
}