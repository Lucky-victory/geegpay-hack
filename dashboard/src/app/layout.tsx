import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomChakraProvider from "@/providers/chakra";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],variable:'--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: "Dashboard Design",
  description: "A hackathon by Geegpay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.variable}>
        <CustomChakraProvider>{children}</CustomChakraProvider>
      </body>
    </html>
  );
}
