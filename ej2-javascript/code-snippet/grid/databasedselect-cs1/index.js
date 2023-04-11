ej.grids.Grid.Inject(ej.grids.Page);
var selIndex = [];
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    selectionSettings: {type: "Multiple"},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City',  width: 100 },
        { field: 'ShipName', headerText: 'Ship Name',  width: 100 }
    ],
    height: 220,
    rowDataBound: function(args) {
        if (args.data['EmployeeID'] > 3) {
            selIndex.push(parseInt(args.row.getAttribute('aria-rowindex')));
        }
    },
    dataBound: function(args) {
        if (selIndex.length) {
            this.selectRows(selIndex);
            selIndex = [];
        }
    }
});
grid.appendTo('#Grid');

