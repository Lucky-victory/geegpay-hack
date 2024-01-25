"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Chart from "@/components/Chart";

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

        <Box bg={"appGray.50"} p={6}>
          <Flex gap={"6"} wrap={"wrap"}>
            <Chart />
            <Cards />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
