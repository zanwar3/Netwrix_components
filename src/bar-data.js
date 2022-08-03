const labels = ["\\\\FS02\\Public", '\\\\FS02\\HR Department', '\\\\FS02\\Finance', '\\\\FS02\\accounting', '\\\\FS02\\documentation'];
const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'Sensitive Files',
    data: [143, 78, 70, 68, 60, 0],
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