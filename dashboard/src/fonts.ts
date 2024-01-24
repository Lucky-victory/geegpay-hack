import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-inter",
});
export const fonts = {
  PlusJakartaSans,inter
};
