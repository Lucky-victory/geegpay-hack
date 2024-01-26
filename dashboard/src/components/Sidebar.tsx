import { Box, Flex } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box
      bg={"white"}
      pos={"fixed"}
      top={0}
      left={0}
      w={"80px"}
      flexShrink={0}
      h={"full"}
      pb={10}
    >
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        maxH={"876px"}
        h={"full"}
        bg={"blue.500"}
      ></Flex>
    </Box>
  );
}
