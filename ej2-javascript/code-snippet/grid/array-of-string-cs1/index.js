var grid = new ej.grids.Grid({
    dataSource: stringData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Name', headerText: 'Full Name', width: 120, valueAccessor: getConcatenatedNames },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function getConcatenatedNames(field, data, column){
    return data[field].map(function (s) {
        return s.LastName || s.FirstName }).join(' ');
}