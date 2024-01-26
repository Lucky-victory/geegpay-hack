//@ts-nocheck
import { Button, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import {
  HighchartsChart,
  HighchartsProvider,
  Chart as ReactChart,
  XAxis,
  YAxis,
  ColumnSeries,
  Tooltip,
} from "react-jsx-highcharts";
import Highcharts from "highcharts";

export default function ChartComp() {
  return (
    <Flex
      direction={"column"}
      minW={"350px"}
      px={5}
      py={4}
      w={{ xl: "806px", base: "full" }}
      flex={1}
      h={"374px"}
      border={"1px"}
      borderColor={"strokeColor"}
      rounded={"14px"}
      bg={"white"}
      pos={"relative"}
    >
      <Flex mb={"10px"} justify={"space-between"}>
        <Heading
          fontWeight={"semibold"}
          fontSize={"18px"}
          lineHeight={"26px"}
          color={"#26282C"}
        >
          Sales Trends
        </Heading>
        <HStack gap={"10px"}>
          <Text
            as={"span"}
            fontWeight={"medium"}
            color={"secondary"}
            fontSize={"14px"}
          >
            Sort by:
          </Text>
          <Button
            variant={"ghost"}
            colorScheme="appGray"
            color={"secondary"}
            rounded={"full"}
            px={3}
            py={"6px"}
            gap={"10px"}
            border={"1px"}
            h={8}
            borderColor={"#E1DFDF"}
          >
            <Text fontSize={"12px"} as={"span"}>
              Weekly
            </Text>{" "}
            <Image alt="" src="/icons/chevron-down.svg" />
          </Button>
        </HStack>
      </Flex>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart
          plotOptions={{
            column: {
              clip: false,
            },
          }}
        >
          <Tooltip
            headerFormat=""
            backgroundColor={"#000"}
            borderRadius={5}
            style={{
              color: "white",

              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "var(--font-jakarta)",
            }}
            valuePrefix="$"
            useHTML
            pointFormat="<b style='padding:5px 15px;font-size:12px;font-weight:500;height:26px'>{tooltip.valuePrefix}{point.y}</b>"
            // format={"<b style='font-family:500'></b>"}
          />
          <ReactChart
            style={{ flex: 1 }}
            height={"312px"}
            // backgroundColor={"red"}
            spacingLeft={4}
            spacingRight={4}
            spacingBottom={13}
            // spacingTop={10}
          />
          <XAxis
            lineWidth={0}
            labels={{
              style: {
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: 14,
                color: "#525252",
              },
            }}
            categories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
          >
            <XAxis.Title></XAxis.Title>
          </XAxis>
          <YAxis
            labels={{
              style: {
                fontFamily: "var(--font-jakarta)",
                color: "#525252",
                fontWeight: 600,
                lineWidth: 0,
              },
              formatter: (ctx) => {
                return Highcharts.numberFormat(ctx.value, 0, ",", ".");
              },
            }}
            tickInterval={5000}
            tickPositions={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
            gridLineWidth={1}
            gridLineDashStyle="LongDash"
            gridLineColor={"#EAEAEA"}
          >
            <YAxis.Title></YAxis.Title>
            <ColumnSeries
              name=""
              point={{
                events: {
                  mouseOver: function () {
                    this.update(
                      {
                        color: {
                          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                          stops: [
                            [0, "rgba(52, 202, 165, 1)"], // Start color
                            [1, "rgba(52, 202, 165, 0.1)"], // End color
                          ],
                        },
                      },
                      false
                    );

                    // Set the opacity of other bars to 0.4
                    this.series.points.forEach(function (point) {
                      if (point !== this) {
                        point.update(
                          {
                            color: "rgba(52, 202, 165, 0.12)",
                          },
                          false
                        );
                      }
                    }, this);

                    // Redraw the chart to apply the changes
                    this.series.chart.redraw();
                  },
                  mouseOut: function () {
                    // Restore the original colors
                    this.series.points.forEach(function (point) {
                      point.update(
                        {
                          color: null, // Reset to the default color
                        },
                        false
                      );
                    });

                    // Redraw the chart to apply the changes
                    this.series.chart.redraw();
                  },
                },
              }}
              pointWidth={30}
              color={"#34CAA5"}
              borderRadius={"50px"}
              borderWidth={0}
              data={[
                8000, 22000, 3500, 27000, 8000, 44500, 9000, 15000, 33000, 8500,
                29500, 26000,
              ]}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </Flex>
  );
}
