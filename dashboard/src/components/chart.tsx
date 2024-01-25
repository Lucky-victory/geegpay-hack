//@ts-nocheck
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  HighchartsChart,
  HighchartsProvider,
  Title,
  Chart as ReactChart,
  Subtitle,
  Legend,
  XAxis,
  YAxis,
  LineSeries,
  ColumnSeries,
  Tooltip,
} from "react-jsx-highcharts";
import Highcharts from "highcharts";
import { fonts } from "@/fonts";
// const config= {
//   chart: {
//     type: "column",
//   },
//   legend: {
//     borderColor: "red",
//     borderWidth: 5,
//   },
//   title: {
//     text: "Sales Trend",
//     align: "left",
//   },

//   xAxis: {
//     categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
//     crosshair: true,
//     accessibility: {
//       description: "Countries",
//     },
//   },
//   yAxis: {
//     gridLineWidth: 1, // Set the width of the grid lines
//     gridLineColor: "rgba(0, 0, 0, 0.1)",
//     gridLineDashStyle: "LongDash",
//     labels: {
//       formatter: function () {
//         // Use Highcharts.numberFormat to format the labels as desired
//         return Highcharts.numberFormat(this.value, 0, ",", ".");
//       },
//     },
//     min: 0,
//     title: {
//       text: "1000 metric tons (MT)",
//     },
//   },
//   tooltip: {
//     // Customize tooltip style
//     backgroundColor: "#000",
//     borderColor: "black",
//     borderRadius: 5,
//     borderWidth: 1,
//     style: {
//       color: "#fff",
//     },
//     // Add other tooltip options as needed
//   },
//   // tooltip: {
//   //     valueSuffix: ' (1000 MT)'
//   // },
//   plotOptions: {
//     column: {
//       pointPadding: 0.1,
//       borderWidth: 0,
//     },
//   },
//   series: [
//     {
//       name: "Corn",
//       data: [406292, 260000, 107000, 68300, 27500, 14500],
//       point: {
//         events: {
//           mouseOver: function () {
//             // Set the hovered bar opacity to 1
//             this.update(
//               {
//                 color: "rgba(144, 237, 125, 1)",
//               },
//               false
//             );

//             // Set the opacity of other bars to 0.4
//             this.series.points.forEach(function (point) {
//               if (point !== this) {
//                 point.update(
//                   {
//                     color: "rgba(144, 237, 125, 0.4)",
//                   },
//                   false
//                 );
//               }
//             }, this);

//             // Redraw the chart to apply the changes
//             this.series.chart.redraw();
//           },
//           mouseOut: function () {
//             // Restore the original colors
//             this.series.points.forEach(function (point) {
//               point.update(
//                 {
//                   color: null, // Reset to the default color
//                 },
//                 false
//               );
//             });

//             // Redraw the chart to apply the changes
//             this.series.chart.redraw();
//           },
//         },
//       },
//     },
//   ],
// });

export default function Chart() {
  return (
    <Flex
      direction={"column"}
      minW={"350px"}
      px={5}
      py={4}
      w={{ xl: "806px", base: "full" }}
      flex={1}
      h={"380px"}
      border={"1px"}
      borderColor={"strokeColor"}
      rounded={"14px"}
      bg={"white"}
      pos={"relative"}
    >
      <Flex mb={"10px"}>
        <Heading
          fontWeight={"semibold"}
          fontSize={"18px"}
          lineHeight={"26px"}
          color={"#26282C"}
        >
          Sales Trends
        </Heading>
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
              width: 80,
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: "medium",
              fontFamily: "var(--font-jakarta)",
            }}
            valuePrefix="$"
            useHTML
            pointFormat="{tooltip.valuePrefix}{point.y}"
            // format={"<b style='font-family:500'></b>"}
          />
          <ReactChart style={{ flex: 1 }} height={"324px"} />
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
            // tooltipValueFormat="{point.y}"
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
            // tickmarkPlacement={"between"}
            // tickWidth={2}

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
                6500, 22000, 3500, 27000, 8000, 45000, 9000, 15000, 33000, 8500,
                29500, 26000,
              ]}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </Flex>
  );
}
