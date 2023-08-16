let asideBtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');


asideBtn.addEventListener('click', () => {
    aside.classList.add('show');
   backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});
backdrop.addEventListener('click', () => {
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

// Chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08','09', '10', '11', '12', '13', '14'],
    datasets: [{
      label: 'first dataset',
      backgroundColor: 'rgba(285, 92, 100, 2 )',
      borderColor: 'rgba(155, 99, 132, 1)',
      borderRadius: 8,
      data: [12, 19, 30, 52, 25, 3,29,21,3,8,10,11,19,24],
      borderWidth: 1
    },
    {
      label: 'second dataset', // Give distinct label here
      backgroundColor: 'rgba(285, 93, 100, 2,0.2 )',
      borderColor: 'rgba(285, 99, 10, 2)',
      borderRadius: 8,
      data: [12, 19, 30, 52, 25, 3,29,21,3,8,10,11,19,24],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false, // Disable the aspect ratio
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          borderColor: 'transparent',
          borderDash: [5]
        },
        ticks: {
          stepSize: 10,
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
        }
      }
    } // Don't forget to close the 'plugins' object
  } // Don't forget to close the 'options' object
});

// data analysis
// new DataTable('#example');


$(document).ready( function () {
  var table = $('#example').DataTable( {
    pageLength : 3,
   
  } )
} );


// Chart. js for visitor
const visitor = document.getElementById('myVisitor');

new Chart(visitor, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'],
    datasets: [{
      label: 'first dataset',
      backgroundColor: 'rgba(285, 92, 100, 2 )',
      borderColor: 'rgba(155, 99, 132, 1)',
      borderRadius: 8,
      data: [32, 19, 30, 42, 25, 18,16,23],
      borderWidth: 1
    },
    {
      label: 'first dataset',
      backgroundColor: 'rgba(285, 92, 100, 2 )',
      borderColor: 'rgba(155, 99, 132, 1,0.2)',
      borderRadius: 8,
      data: [12, 16, 30, 26, 15, 38,35,40],
      borderWidth: 1
    },
    ]
  },
  options: {
    maintainAspectRatio: false, // Disable the aspect ratio
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          borderColor: 'transparent',
          borderDash: [5]
        },
        ticks: {
          stepSize: 10,
        },
      
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
        }
      }
    } // Don't forget to close the 'plugins' object
  } // Don't forget to close the 'options' object
});