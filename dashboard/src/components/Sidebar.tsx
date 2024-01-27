import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  ResponsiveValue,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function Sidebar() {
  const linkStyles = {
    p: "10px",
    pos: "relative" as ResponsiveValue<"relative">,
    textDecor: "none",

    display: "flex",
    alignItems: "center",
    className: "nav-link",
    justifyContent: "center",
    h: 10,
    _hover: {
      bg: "appGray.200",
      _before: {
        content: `''`,
        pos: "absolute",

        right: 0,
        width: "3px",
        h: "21px",
        top: "50%",
        transform: "auto",
        translateY: "-50%",
        roundedLeft: 4,
        bg: "#0D062D",
      },
    },
  };
  return (
    <>
      <Box
        bg={"white"}
        pos={"fixed"}
        top={0}
        left={0}
        w={{ base: "60px", lg: "80px" }}
        display={{ base: "none", md: "block" }}
        flexShrink={0}
        zIndex={50}
        h={"full"}
        className="sidebar-main-wrap"
        pb={10}
      >
        <Box
          maxH={"876px"}
          className="sidebar-inner"
          py={{ xl: 5, base: 3 }}
          h={"full"}
          bg={"sidebarBg"}
          borderRight={"1px"}
          borderRightColor={"#EBECF2"}
        >
          <Flex
            direction={"column"}
            gap={2}
            justifyContent={"space-between"}
            align={"center"}
            h={"full"}
          >
            <Stack gap={{ xl: 5, base: 4 }} align={"center"} w={"full"}>
              <Link href={"#"} textDecor={"none"} p="0">
                <Image alt="Logo" src="/icons/logo.svg" />
              </Link>
              <Stack
                gap={{ xl: 4, base: 3 }}
                w={"full"}
                className="sidebar-nav-links"
              >
                <Link
                  href={"#"}
                  {...linkStyles}
                  pos={"relative"}
                  _before={{
                    content: `''`,
                    pos: "absolute",

                    right: 0,
                    width: "3px",
                    h: "21px",
                    top: "50%",
                    transform: "auto",
                    translateY: "-50%",
                    roundedLeft: 4,
                    bg: "#0D062D",
                  }}
                >
                  <Image alt="" src="/icons/category.svg" />
                </Link>
                <Link href={"#"} {...linkStyles}>
                  <Image alt="" src="/icons/trend-up.svg" />
                </Link>
                <Link href={"#"} {...linkStyles}>
                  <Image alt="" src="/icons/profile2-user.svg" />
                </Link>
                <Link href={"#"} {...linkStyles}>
                  <Image alt="" src="/icons/box.svg" />
                </Link>
                <Link href={"#"} {...linkStyles}>
                  <Image alt="" src="/icons/discount-shape.svg" />
                </Link>
                <Link href={"#"} {...linkStyles}>
                  <Image alt="" src="/icons/info-circle.svg" />
                </Link>
                <VStack
                  bg={"white"}
                  rounded={"full"}
                  h={{ md: "92px", base: "86px" }}
                  w={{ md: "46px", base: "40px" }}
                  p={{ md: 2, base: "6px" }}
                  align={"center"}
                  justify={"center"}
                  alignSelf={"center"}
                >
                  <Stack gap={2} w={"30px"} justify={"center"}>
                    <Button
                      minW={0}
                      // variant={"unstyled"}
                      aria-label="lightmode"
                      rounded={"94px"}
                      // _hover={{ bg: "appGray.100" }}
                      p={"6px"}
                      w={"30px"}
                      h={"30px"}
                      // bg={"transparent"}
                      bg={"appGreen"}
                    >
                      <Image
                        alt=""
                        src="/icons/lightmode.svg"
                        w={"30px"}
                        h={"30px"}
                      />
                    </Button>
                    <Button
                      minW={0}
                      // _hover={{ bg: "appGray.100" }}
                      p={"3px"}
                      w={"30px"}
                      h={"30px"}
                      aria-label="darkmode"
                      rounded={"94px"}
                      // bg={"appGray.900"}
                      bg={"transparent"}
                    >
                      <Image
                        alt=""
                        src="/icons/darkmode.svg"
                        w={"30px"}
                        h={"30px"}
                      />
                    </Button>
                  </Stack>
                </VStack>
              </Stack>
            </Stack>
            <Stack
              w={"full"}
              // gap={{ xl: 4, base: 3 }}
              // align={"center"}
              className="sidebar-nav-links"
            >
              <Link href={"#"} {...linkStyles}>
                <Image alt="" src="/icons/arrow-right.svg" />
              </Link>
              <Link href={"#"} {...linkStyles}>
                <Image alt="" src="/icons/setting-2.svg" />
              </Link>
              <Link href={"#"} {...linkStyles}>
                <Image alt="" src="/icons/logout.svg" />
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
