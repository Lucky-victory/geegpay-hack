import type { Metadata } from "next";
import "./globals.css";
import CustomChakraProvider from "@/providers/chakra";
import { fonts } from "@/fonts";

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
    <html lang="en" className={fonts.PlusJakartaSans.variable}>
      <body className={fonts.PlusJakartaSans.variable}>
        <CustomChakraProvider>{children}</CustomChakraProvider>
      </body>
    </html>
  );
}
