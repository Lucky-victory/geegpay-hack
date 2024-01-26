import { Box } from "@chakra-ui/react";

export default function SalesReport() {
  return (
    <Box
      maxW={{ xl: "500px", "2xl": "500px", base: "auto" }}
      border={"1px"}
      minW={"350px"}
      borderColor={"strokeColor"}
      rounded={"14px"}
      bg={"white"}
      flex={1}
    ></Box>
  );
}
