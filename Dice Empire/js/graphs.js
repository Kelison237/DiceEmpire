// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sept','Oct','Nov','Dec'];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [10, 30, 50, 20, 25, 44, -10],
//     },
//     {
//       label: 'Dataset 2',
//       data: [100, 33, 22, 19, 11, 49, 30],
//     }
//   ]
// };

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [{
            label: '# of Votes',
            data:  [10, 30, 50, 20, 25, 44, 50,33,45,23,56,43,43],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(185, 178, 83, 0.72)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      tension: 0.5,
      responsive: false,
          maintainAspectRatio: false,
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'red',
      interaction: {
        mode: 'nearest',
        intersect: true,
        axis: 'y'
      },
      plugins: {
        tooltip: {
          enabled: false
        }
      },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

            var ctx_2 = document.querySelector('#myChart2').getContext('2d');
            var data_2 = {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        '#3c8dbc',
                        '#f56954',
                        '#f39c12',
                    ],
                }],
                labels: [
                    'Request',
                    'Layanan',
                    'Problem'
                ]
            };
            var myDoughnutChart_2 = new Chart(ctx_2, {
                          type: 'doughnut',
                          data: data_2,
                          options: {
                            responsive: false,
                                maintainAspectRatio: false,
                            animations: {
                              radius: {
                                duration: 400,
                                easing: 'linear',
                                loop: (context) => context.active
                              }
                            },
                              maintainAspectRatio: false,
                              legend: {
                                  position: 'bottom',
                                  labels: {
                                      boxWidth: 12
                                  }
                              }
                          }
                      });
