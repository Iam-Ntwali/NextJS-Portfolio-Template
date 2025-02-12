import type { Metadata } from "next";
import { Calistoga, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const altFont = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const primaryFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

// Search Engine Optimization Metadata TODO: Add Yours
// export const metadata: Metadata = {
//   // metadataBase: new URL(""), // TODO: add domain
//   title: "",
//   authors: {
//     name: "",
//   },

//   description: "",

//   keywords: ["portfolio"],
//   twitter: {
//     card: "summary_large_image",
//     site: "@your_twitter_handle",
//     creator: "@your_twitter_handle",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          primaryFont.variable,
          altFont.variable,
          "bg-black text-white antialiased font-sans selection:bg-sky-400 selection:text-emerald-700"
        )}
      >
        {children}
      </body>
    </html>
  );
}
