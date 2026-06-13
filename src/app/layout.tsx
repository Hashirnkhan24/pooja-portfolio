import type { Metadata } from "next";
import { Poppins, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooja Bhanushali | Aspiring HR Professional",
  description: "Aspiring HR Professional specializing in Talent Engagement, Learning & Development, and People Operations. Explore my work experience at Tata Motors, Shoppers Stop, and interact with my AI assistant.",
  keywords: [
    "Pooja Bhanushali",
    "HR Portfolio",
    "Tata Motors Intern",
    "Shoppers Stop OJT",
    "HR Intern Mumbai",
    "People Operations",
    "Learning Experience Platform",
    "Chetana's MMS HR"
  ],
  authors: [{ name: "Pooja Bhanushali" }],
  openGraph: {
    title: "Pooja Bhanushali | HR Portfolio",
    description: "Aspiring HR Professional specializing in Talent Engagement, Learning & Development, and People Operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${dancingScript.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-base text-text-base">
        {children}
      </body>
    </html>
  );
}
