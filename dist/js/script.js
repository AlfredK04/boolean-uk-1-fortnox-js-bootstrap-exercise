const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],

        datasets: [{
            label: 'Sales',

            data: [
                15300,
                21300,
                18400,
                24000,
                23500,
                24100,
                12000
            ],

            borderColor: '#0d6efd',
            backgroundColor: '#0d6efd',

            borderWidth: 4,

            pointRadius: 6,
            pointHoverRadius: 7,

            pointBackgroundColor: '#0d6efd',
            pointBorderColor: '#0d6efd',

            tension: 0
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                enabled: true
            }
        },

        scales: {

            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },

                ticks: {
                    color: '#666',
                    font: {
                        size: 16
                    }
                }
            },

            y: {

                min: 12000,
                max: 26000,

                ticks: {
                    stepSize: 2000,

                    color: '#666',

                    font: {
                        size: 16
                    }
                },

                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
});
