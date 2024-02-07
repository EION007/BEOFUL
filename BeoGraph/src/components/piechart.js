import { fetchData } from "../util/utils.js";

export function drawPieChart() {
  fetchAndDrawChart("pie_chart_div", "Pie Chart", "is3D", true);
}

async function fetchAndDrawChart(containerId, title, optionName, optionValue) {
  try {
    const data = await fetchData("http://localhost:3001/data");
    const chartData = aggregateData(data);

    const chartDataTable = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: title,
      [optionName]: optionValue,
    };

    const chart = new google.visualization.PieChart(
      document.getElementById(containerId)
    );
    chart.draw(chartDataTable, options);
  } catch (error) {
    console.error("Error fetching or drawing chart:", error);
  }
}

function aggregateData(data) {
  const statusCounts = {};
  data.forEach((record) => {
    if (statusCounts[record.status]) {
      statusCounts[record.status]++;
    } else {
      statusCounts[record.status] = 1;
    }
  });

  const chartData = [["Status", "Count"]];
  Object.keys(statusCounts).forEach((status) => {
    chartData.push([status, statusCounts[status]]);
  });

  return chartData;
}
