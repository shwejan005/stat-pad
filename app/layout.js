import { League_Spartan } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import Header from "@/components/ui/Header";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";

const font = League_Spartan({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "StatPad",
  description: "Battle your dev skills in a gamified arena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ConvexClerkProvider>
        <ReactLenis root>
          <body className={`${font.className} antialiased`}>
            <Header />
              {children}
          </body>
        </ReactLenis>
      </ConvexClerkProvider>
    </html>
  );
}
