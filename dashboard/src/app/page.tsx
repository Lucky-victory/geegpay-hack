"use client";
import { Box, Flex, Grid, GridItem, Stack, useDisclosure } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import ChartComp from "@/components/chart";
import FilesTable from "@/components/FilesTable";
import SalesReport from "@/components/SalesReport";

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      as="main"
      w={"100vw"}
      h={{ base: "var(--chakra-vh)", xl: "1080px" }}
      maxW={"1440px"}
      maxH={"1080px"}
      mx={"auto"}
      bg={"appRed"}
      p={0}
    >
      {/* <Box display={{ base: "none", sm: "block" }} bg={"red"}> */}
      <Sidebar onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
      {/* </Box> */}
      <Stack
        overflowX={"hidden"}
        gap={0}
        ml={{ base: "0px", sm: "60px", lg: "80px" }}
        className="section-wrap"
        flex={1}
      >
        <Header onClose={onClose} isOpen={isOpen} onOpen={onOpen} />

        <Box bg={"appGray.50"} p={{ base: 3, lg: 5 }} maxW={"full"}>
          <Flex gap={{ base: 3, lg: 4 }} wrap={"wrap"}>
            <ChartComp />
            <Cards />
          </Flex>
          <Flex my={4} gap={{ base: 3, lg: 4 }} wrap={"wrap"} maxW={"full"}>
            <FilesTable />
            <SalesReport />
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}
