import { drawPieChart } from "./src/components/piechart.js";
import { drawBarGraph } from "./src/components/bargraph.js";
import { drawLineGraph } from "./src/components/linegraph.js";

google.charts.load("current", { packages: ["corechart", "bar", "line"] });
google.charts.setOnLoadCallback(() => {
  drawPieChart();
  drawBarGraph();
  drawLineGraph();
});
