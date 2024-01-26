import { Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Cards() {
  const cardData = [
    {
      title: "Total Order",
      content: "350",
      icon: "box-tick.svg",
    },
    {
      title: "Total Refund",
      content: "270",
      icon: "3d-rotate.svg",
      isHigh: false,
    },
    {
      title: "Average Sales",
      isHigh: false,
      content: "1567",
      icon: "shopping-cart.svg",
    },
    {
      title: "Total Income",
      content: "$350.000",
      icon: "coin.svg",
    },
  ];
  return (
    <Flex
      gap={4}
      maxW={{ xl: "500px", "2xl": "500px", base: "auto" }}
      wrap={"wrap"}
    >
      {cardData.map((data, i) => (
        <Card key={"card" + i} {...data} />
      ))}
    </Flex>
  );
}

interface CardProps {
  icon: string;
  content: string;
  title: string;
  isHigh?: boolean;
}
export function Card({ icon, title, content, isHigh = true }: CardProps) {
  return (
    <VStack
      m={0}
      align={"start"}
      p={4}
      h={"179px"}
      gap={"10px"}
      rounded={"14px"}
      w={"239px"}
      border={"1px"}
      borderColor={"strokeColor"}
      bg={"white"}
    >
      <HStack justify={"space-between"} w={"full"}>
        <Flex
          justify={"center"}
          align={"center"}
          h={10}
          w={10}
          rounded={"full"}
          border={"1px"}
          borderColor={"appGray.200"}
        >
          <Image alt="" src={"/icons/" + icon} />
        </Flex>
        <Image alt="" src={isHigh ? "/chart-high.svg" : "/chart-low.svg"} />
      </HStack>
      <VStack align={"start"} gap={"5px"}>
        <Heading
          color={"textGray"}
          fontSize={"18px"}
          lineHeight={"26px"}
          fontWeight={"medium"}
        >
          {title}
        </Heading>
        <Text
          as={"span"}
          fontSize={"24px"}
          lineHeight={"32px"}
          fontWeight={"semibold"}
          color={"secondary"}
        >
          {content}
        </Text>
      </VStack>
      <HStack gap={"10px"}>
        <HStack
          bg={isHigh ? "appGreenTrans12" : "appRedTrans12"}
          px={2}
          py={1}
          gap={1}
          rounded={"full"}
          w={"70px"}
          h={6}
        >
          {" "}
          <Image
            alt=""
            src={isHigh ? "/icons/trending-up.svg" : "/icons/trending-down.svg"}
          />
          <Text
            as={"span"}
            fontWeight={"medium"}
            lineHeight={"16px"}
            fontSize={"12px"}
            color={isHigh ? "appGreen" : "appRed"}
          >
            23,5%
          </Text>
        </HStack>
        <Text as={"span"} fontSize={"14px"} color={"textGray2"}>
          vs. previous month
        </Text>
      </HStack>
    </VStack>
  );
}
