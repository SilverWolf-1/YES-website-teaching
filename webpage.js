document.addEventListener('DOMContentLoaded', function() {
    var TESTER = document.getElementById('tester');

    var trace1 = {
        x: ["blue(470)", "cyan(525)", "green(560)", "yellow(585)", "orange(600)", "red(645)", "deep red(700)", "IR1(735)", "IR2(810)", "IR3(880)", "IR4(940)"],
        y: [26.55, 13.74, 15.41, 15.45, 16.49, 37.88, 61.39, 61.39, 62.4, 90.15, 98.34, 101.97],
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
        mode: 'lines+markers',
        marker: { size: 10 }
    };

    var data = [trace1];

    var layout = {
        title: 'Reflection Percentage',
        xaxis: {
            title: 'Wavelength (nm)',
        },
        yaxis: {
            title: 'Reflection %',
        }
    };

    Plotly.newPlot('tester', data, layout);
});

