"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Chart from "@/components/Chart";
import FilesTable from "@/components/FilesTable";
import SalesReport from "@/components/SalesReport";

export default function Home() {
  return (
    <Flex
      as="main"
      w={"100vw"}
      h={{ base: "var(--chakra-vh)", xl: "1080px" }}
      maxW={"1440px"}
      maxH={"1080px"}
      mx={"auto"}
      bg={"appBg"}
      p={0}
    >
      <Sidebar />
      <Stack ml={"80px"} gap={0}>
        <Header />

        <Box bg={"appGray.50"} p={5} maxW={"full"}>
          <Flex gap={"4"} wrap={"wrap"}>
            <Chart />
            <Cards />
          </Flex>
          <Flex my={4} gap={"4"} wrap={"wrap"} maxW={"full"}>
            <FilesTable />
            <SalesReport />
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}
