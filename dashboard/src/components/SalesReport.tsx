import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";

export default function SalesReport() {
  const data = [
    {
      title: "Book Bazaar",
      growthWidth: 245,
      amount: "2,500,000",
      percent: 15,
      color: "appPurple",
    },
    {
      title: "Artisan Aisle",
      growthWidth: 205,
      amount: "1,800,000",
      color: "appBlue",
      percent: 10,
    },
    {
      title: "Toy Troop",
      growthWidth: 122,
      amount: "1,200,000",
      color: "appOrange",
      percent: 8,
    },
    {
      title: "XStore",
      growthWidth: 122,
      amount: "600,000",
      color: "appRed2",
      percent: 5,
    },
  ];
  return (
    <Box
      maxW={{ xl: "488px", "2xl": "488px", base: "auto" }}
      border={"1px"}
      minW={{ xl: "350px", base: "100%" }}
      borderColor={"strokeColor"}
      rounded={"14px"}
      bg={"white"}
      flex={1}
      px={{ base: 3, lg: "18px" }}
      py={4}
    >
      <Stack gap={{ base: 4, xl: 5 }}>
        <SectionHeader title="Top Platform" />

        <Stack align={"flex-start"} gap={{ base: 4, xl: 5 }}>
          {data.map((d, i) => (
            <Stack key={"sales" + i} gap={"17px"} w={"full"}>
              <Heading
                as={"h3"}
                fontSize={"18px"}
                fontWeight={"semibold"}
                lineHeight={"26px"}
                color={"textBlack"}
              >
                {d.title}
              </Heading>
              <Box
                pos={"relative"}
                h={3}
                bg={"appGray.100"}
                rounded={10}
                overflow={"hidden"}
              >
                <Box
                  pos={"absolute"}
                  w={d.growthWidth + "px"}
                  rounded={"inherit"}
                  h={"full"}
                  bg={d.color}
                ></Box>
              </Box>
              <HStack
                justify={"space-between"}
                color={"appGray.600"}
                fontSize={{ base: "16px", xl: "18px" }}
              >
                <Text as={"span"} flexShrink={0}>
                  ${d.amount}
                </Text>
                <Text as={"span"} flexShrink={0}>
                  +{d.percent}%
                </Text>
              </HStack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
