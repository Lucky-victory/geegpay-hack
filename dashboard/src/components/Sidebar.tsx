import { Box, Flex } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box bg={"white"} w={"80px"} h={"full"} pb={10}>
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        maxH={"876px"}
        h={"full"}
        bg={"sidebarBg"}
      ></Flex>
    </Box>
  );
}
