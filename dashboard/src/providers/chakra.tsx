"use client";

import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const theme = extendTheme({
  fonts: {
    heading: "var(--font-jakarta)",
    body: "var(--font-jakarta)",
  },
  config,
  colors: {
    strokeColor: "#EDF2F7",
    appRed: "#ED544E",
    appBg: "#fdfdfd",
    success: "#00AC56",
    error: "#FF1F7D",
    warning: "#F5BF3D",
    primary: "#bb372f",
    secondary: "#3a3f51",
    sidebarBg: "#F7F8FA",
    appGreenTrans12: "rgba(52, 202, 165, 0.12)",
    appRedTrans12: "rgba(237, 84, 78, 0.12)",
    appGreen: "#34CAA5",
    appLemon: "rgba(119, 185, 0, 1)",
    appLemonTrans: "rgba(119, 185, 0, 0)",
    error2Trans: "rgba(237, 84, 78, 0)",
    textGray: "#898989",
    textGray2: "#606060",
    appPurple: "#6160DC",
    appBlue: "#54C5EB",
    textBlack: "#22242C",
    appOrange: "#FFB74A",
    appRed2: "#FF4A55",
    appLightGray: "#DADDDD",
    appGray: {
      50: "#FAFAFA",
      100: " #F5F5F5",
      200: "#E5E5E5",
      300: "#B2ABAB",
      400: ": #A3A3A3",
      500: " #737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
});
export default function CustomChakraProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
