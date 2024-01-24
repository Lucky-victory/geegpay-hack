// import ReactHighcharts from "react-highcharts";
// import Highcharts from "highcharts";

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

// export default function Chart() {

//     // return <ReactHighcharts config={config} />
// }
