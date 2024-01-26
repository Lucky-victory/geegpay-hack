import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function Sidebar() {
  const linkStyles = {
    p: "10px",
    textDecor: "none",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    h: 10,
  };
  return (
    <Box
      bg={"white"}
      pos={"fixed"}
      top={0}
      left={0}
      w={"80px"}
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
                h={"92px"}
                w={"46px"}
                p={2}
                align={"center"}
                justify={"center"}
                alignSelf={"center"}
              >
                <Stack gap={2} w={"30px"} justify={"center"}>
                  <Button
                    variant={"unstyled"}
                    aria-label="lightmode"
                    rounded={"94px"}
                    // _hover={{ bg: "appGray.100" }}
                    p={0}
                    w={"30px!important"}
                    h={"30px"}
                    bg={"transparent"}
                  >
                    <Image
                      alt=""
                      src="/icons/lightmode.svg"
                      w={"30px"}
                      h={"30px"}
                    />
                  </Button>
                  <Button
                    variant={"unstyled"}
                    aria-label="darkmode"
                    rounded={"94px"}
                    p={0}
                    w={"30px"}
                    h={"30px"}
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
  );
}
