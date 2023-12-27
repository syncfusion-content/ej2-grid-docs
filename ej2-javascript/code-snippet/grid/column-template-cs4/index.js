var grid = new ej.grids.Grid({
    dataSource: employeeData,
    created: renderGridSparkline,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { headerText: 'Employee Performance Rating', template: '#columnTemplate', width: 150 }
    ],
    height: 315,
});
grid.appendTo('#Grid');

var lineData =
    [
        [0, 6, -4, 1, -3, 2, 5],
        [5, -4, 6, 3, -1, 2, 0],
        [6, 4, 0, 3, -2, 5, 1],
        [4, -6, 3, 0, 1, -2, 5],
        [3, 5, -6, -4, 0, 1, 2],
        [1, -3, 4, -2, 5, 0, 6],
        [2, 4, 0, -3, 5, -6, 1],
        [5, 4, -6, 3, 1, -2, 0],
        [0, -6, 4, 1, -3, 2, 5],
        [6, 4, 0, -3, 2, -5, 1],
    ];

function renderGridSparkline() {
    setTimeout(() => {
        var grid = document.getElementById('Grid'); // Change 'Grid' to the actual ID of your Syncfusion EJ2 Grid
        var rows = grid.getElementsByClassName('e-row');
        var length = rows.length;

        for (var i = 1; i <= length; i++) {
            var line = new ej.charts.Sparkline({
                height: '50px',
                width: '90%',
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: getSparkData('line', i)
            });
            line.appendTo('#spkline' + i);
        }
    }, 100);
}

function getSparkData(type, count) {
    return lineData[count];
}