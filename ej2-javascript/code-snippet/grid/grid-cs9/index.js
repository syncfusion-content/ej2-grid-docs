var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ej.data.ODataV4Adaptor()
});
var grid = new ej.grids.Grid({
    dataSource: data,
    query: new ej.data.Query().addParams('ej2grid', 'true'),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

