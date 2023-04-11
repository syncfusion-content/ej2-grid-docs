var names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
var statusValue = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
var data = function(count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.round(Math.random() * names.length)] || names[0],
            Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
            Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
            Status: statusValue[Math.round(Math.random() * statusValue.length)] || statusValue[0]
        });
    }
    return result;
};

(window).getStatus = function(statusValue){
    var colors = { 'Completed': 'green', 'Open': 'red', 'In Progress': '#FB1E77', 'Review': 'brown', 'Testing': '#1EC1FB' };
    return '<span style="color:' + colors[statusValue] + '">' + statusValue + '</span>';
};
ej.grids.Grid.Inject(ej.grids.InfiniteScroll);
var grid = new ej.grids.Grid({
    dataSource: data(1000),
    height: 300,
    enableInfiniteScrolling: true,
    pageSettings: { pageSize: 50 },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 50, type: 'number' },
        { field: 'Engineer', width: 100 },
        { field: 'Designation', width: 100 },
        { field: 'Estimation', textAlign: 'Right', width: 100 },
        { field: 'Status', width: 100, template: '${getStatus(data.Status)}' }
    ]
});

grid.appendTo('#Grid');


