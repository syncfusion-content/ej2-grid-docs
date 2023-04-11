var grid = new ej.grids.Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    rowDataBound: rowBound,
    height: 280
});
grid.appendTo('#Grid');

function rowBound(args) {
    if (args.data['Freight'] < 30) {
        args.row.classList.add('below-30');
    } else if (args.data['Freight'] < 80) {
        args.row.classList.add('below-80');
    } else {
        args.row.classList.add('above-80');
    }
}

