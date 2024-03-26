ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    rowDataBound:rowDataBound,
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
      { field: 'FirstName', headerText: 'First Name', width: 100 },
      { field: 'City', headerText: 'City', width: 120 },
      { field: 'Country', headerText: 'Country', width: 120 }
    ],
    childGrid: {
        dataSource: childData,
        queryString: 'EmployeeID',
        allowPaging: true,
        columns: [
            { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    height: 265
});
grid.appendTo('#Grid');

function rowDataBound(args){
   var parentData = (args.data)['EmployeeID'];
   var childrecord = new ej.data.DataManager(childData).executeLocal(new ej.data.Query().where('EmployeeID', 'equal', parentData, true));
    if (childrecord.length === 0) {
        // Here hide which parent row has no child records
       var rowElement = args.row;
       var cellElement= rowElement.querySelector('td')
        cellElement.innerHTML = ' '; 
        cellElement.className = 'e-customizedexpandcell';
    }
}