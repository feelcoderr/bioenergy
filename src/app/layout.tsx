import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verdaez Bioenergy | Turning Biomass Waste into Bioenergy & Carbon Materials",
  description:
    "A scalable biorefinery platform converting agro-waste, grasses and organic residues into industrial fuels, biochar, pyrolysis-oil derivatives, carbon products and measurable climate impact.",
  keywords: "bioenergy, biochar, biomass, pyrolysis, carbon materials, sustainability, cleantech",
  openGraph: {
    title: "Verdaez Bioenergy",
    description: "Turning Biomass Waste into Bioenergy, Biochar and Advanced Carbon Materials",
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
      className={`${outfit.variable} ${workSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#FAFAF7] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
