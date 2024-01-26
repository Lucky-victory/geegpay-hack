import { Link } from "@chakra-ui/next-js";
import {
  Box,
  HStack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Tr,
  ResponsiveValue,
  Text,
  Button,
} from "@chakra-ui/react";

export default function FilesTable() {
  type Status = "Paid" | "Refund";
  const data = [
    {
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: "$80,000",
      status: "Paid",
      image: "/guy.jpg",
    },
    {
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "$150,000",
      status: "Refund",
      image: "/lady2.jpg",
    },
    {
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "$87,000",
      status: "Paid",
      image: "/lady3.jpg",
    },
    {
      image: "/lady1.jpg",
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "$100,000",
      status: "Refund",
    },
    {
      name: "Phillip Lubin",
      date: "Nov 13, 2023",
      amount: "$78,000",
      status: "Paid",
      image: "/guy2.jpg",
    },
  ];
  const statusColor = (status: Status) =>
    status === "Paid" ? "appGreen" : "appRed";
  const tableHeadStyles = {
    pb: 4,
    textTransform: "capitalize" as ResponsiveValue<"capitalize">,
    fontSize: "16px",
    fontWeight: "medium",
    color: "#9CA4AB",
  };
  return (
    <Box
      maxW={"806px"}
      minW={"350px"}
      px={5}
      py={4}
      w={{ xl: "806px", base: "full" }}
      flex={1}
      h={"442px"}
      border={"1px"}
      borderColor={"strokeColor"}
      rounded={"14px"}
      bg={"white"}
      //   pos={"relative/"}
    >
      <HStack justify={"space-between"} mb={"10px"}>
        <Heading fontWeight={"semibold"} fontSize={"18px"} lineHeight={"26px"}>
          Last Orders
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
      <TableContainer>
        <Table>
          <Thead mb={5}>
            <Tr h={"auto"}>
              <Th paddingInlineStart={0} {...tableHeadStyles}>
                Name
              </Th>
              <Th {...tableHeadStyles}>Date</Th>
              <Th {...tableHeadStyles}>Amount</Th>
              <Th {...tableHeadStyles}>Status</Th>
              <Th {...tableHeadStyles}>Invoice</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d, i) => (
              <Tr key={"data" + i}>
                <Td paddingInlineStart={0}>
                  <HStack gap={"10px"}>
                    <Image
                      alt=""
                      src={d.image}
                      objectFit={"cover"}
                      w={8}
                      h={8}
                      rounded={"34px"}
                      flexShrink={0}
                    />
                    <Text as={"span"} fontWeight={"medium"} fontSize={"16px"}>
                      {d.name}
                    </Text>
                  </HStack>
                </Td>
                <Td color={"appGray.500"}>{d.date}</Td>
                <Td fontWeight={"medium"}>{d.amount}</Td>
                <Td color={statusColor(d.status as Status)}>{d.status}</Td>
                <Td>
                  <Button
                    py={"2px"}
                    px={"4px"}
                    variant={"ghost"}
                    colorScheme="appGray"
                    color={"#0D062D"}
                    fontWeight={"normal"}
                    fontSize={"14px"}
                    gap={"6px"}
                    h="auto"
                  >
                    <Image alt="" src="/icons/document-download.svg" />{" "}
                    <span>View</span>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
