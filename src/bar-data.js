const labels = ["\\\\FS02\\HR Department", 'Label 2', 'Label 3', 'Label 4'];
const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'Sensitive Files',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: 'rgba(255, 71, 81, 0.5)',
    borderColor: '1px solid #FC5555',
    borderWidth: 1
  }]
};
// </block:setup>

export const barChartData = {
  type: 'horizontalBar',
  data: data,
  options: {
    indexAxis: 'y',
  }
};
  
  export default barChartData;