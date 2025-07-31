import { League_Spartan } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ClerkProvider } from "@clerk/nextjs";

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
      <ClerkProvider>
        <ReactLenis root>
          <body className={`${font.className} antialiased`}>
            {children}
          </body>
        </ReactLenis>
      </ClerkProvider>
    </html>
  );
}
