// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChartIdade");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["-18", "18-28", "29-39", "40+"],
    datasets: [{
      data: [25, 30, 25, 20],
      backgroundColor: ['#9eb25d', '#1cc88a', '#f0f66e', '#d4c685'],
      hoverBackgroundColor: ['#9eb25d', '#1cc88a', '#f0f66e', '#d4c685'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
