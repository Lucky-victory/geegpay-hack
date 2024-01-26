import { Link } from "@chakra-ui/next-js";
import { HStack, Heading } from "@chakra-ui/react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <HStack justify={"space-between"} mb={"10px"}>
      <Heading fontWeight={"semibold"} fontSize={"18px"} lineHeight={"26px"}>
        {title}
      </Heading>
      <Link
        href={"#"}
        fontSize={"18px"}
        fontWeight={"semibold"}
        lineHeight={"26px"}
        color="appGreen"
      >
        See All
      </Link>
    </HStack>
  );
}
