"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Flex
      as="main"
      w={"100vw"}
      h={"100vh"}
      maxW={"1440px"}
      maxH={"1080px"}
      mx={"auto"}
      bg={"appBg"}
    >
      <Sidebar />
      <Box flex={1}>
        <Header />
      </Box>
    </Flex>
  );
}
