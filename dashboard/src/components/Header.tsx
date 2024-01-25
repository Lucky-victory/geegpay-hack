import { fonts } from "@/fonts";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack
      w={"full"}
      py={"18px"}
      px={5}
      bg={"appGray.50"}
      borderBottom={"1px"}
      borderBottomColor={"#E5EAEF"}
    >
      <Flex justify={"space-between"} h={"52px"} flex={1} gap={5}>
        {/* SEARCH AREA START */}

        <HStack justify={"space-between"} flex={1} maxW={"810px"}>
          <Heading fontSize={"20px"} fontWeight={"medium"}>
            Dashboard
          </Heading>
          <Image
            hideFrom={"850px"}
            src="/icons/search.svg"
            zIndex={4}
            w={"18px"}
            h={"18px"}
            alt=""
          />
          <Flex pos={"relative"} width={"349px"} hideBelow={"850px"}>
            <Image
              src="/icons/search.svg"
              zIndex={4}
              w={"18px"}
              h={"18px"}
              top={"50%"}
              transform={"auto"}
              translateY={"-50%"}
              alt=""
              pos={"absolute"}
              left={4}
            />
            <Input
              pl={10}
              pos={"relative"}
              fontSize={"16px"}
              border={"1px"}
              borderColor={"appLightGray"}
              _placeholder={{ color: "appLightGray" }}
              color={"appBlack.400"}
              lineHeight={"24px"}
              bg={"white"}
              w={"full"}
              rounded={"full"}
              h={"48px"}
              placeholder="Search..."
            />
          </Flex>
        </HStack>
        {/* SEARCH AREA END */}

        <HStack gap={5} maxW={"488px"} flexShrink={0}>
          {/* NOTIFICATION AREA START */}

          <HStack maxW={"253px"} gap={{ base: 3, lg: 5 }}>
            <HStack px={4} py={2} gap={2} hideBelow={"550px"}>
              <Image src="/icons/calender.svg" alt="" />
              <Text as={"span"} fontWeight={"medium"} fontSize={"14px"}>
                Nov
                <Text as={"span"} hideBelow={"md"}>
                  ember
                </Text>{" "}
                15, 2023
              </Text>
            </HStack>
            <IconButton
              variant={"unstyled"}
              _hover={{ bg: "appGray.100" }}
              rounded={"27px"}
              p={"11px"}
              h={"40px"}
              w={"40px"}
              border={"1px"}
              borderColor={"appLightGray"}
              aria-label="notification"
            >
              <Image src="/icons/bell.svg" alt="" />
            </IconButton>
          </HStack>
          {/* NOTIFICATION AREA END */}

          {/* USER MENU START */}
          <Button
            bg={"transparent"}
            _hover={{ bg: "appGray.100" }}
            h={"52px"}
            flexShrink={0}
            alignItems={"center"}
            maxW={"215px"}
            border={"1px"}
            borderColor={"appLightGray"}
            px={2}
            py={"6px"}
            rounded={"28px"}
            gap={3}
          >
            <Flex gap={2} align={"center"}>
              <Image
                flexShrink={0}
                alt=""
                src="/user.jpg"
                w={{ md: "38px", base: "30px" }}
                h={{ md: "38px", base: "30px" }}
                rounded={"19px"}
                objectFit={"cover"}
              />
              <Flex direction={"column"} gap={1} hideBelow={"lg"}>
                <Text
                  fontSize={"16px"}
                  color={"#26282C"}
                  className={fonts.inter.variable}
                  textAlign={"right"}
                >
                  Justin Bergson
                </Text>
                <Text
                  fontSize={"14px"}
                  className={fonts.inter.variable}
                  textAlign={"right"}
                  color={"#787486"}
                >
                  Justin@gmail.com
                </Text>
              </Flex>
            </Flex>
            <Image alt="" src="/icons/chevron-down.svg" />
          </Button>
          {/* USER MENU END */}
        </HStack>
      </Flex>
    </HStack>
  );
}
