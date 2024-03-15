ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings:{
        type:'Excel',
        columns: [{
            field: 'CustomerID',
            matchCase: false,
            operator: 'startswith',
            predicate: 'or',
            value: 'VINET',
        },
        {
            field: 'CustomerID',
            matchCase: false,
            operator: 'startswith',
            predicate: 'or',
            value: 'HANAR',
        },]
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');