ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging:true,
    toolbar:['ColumnChooser'],
    showColumnChooser:true,
    actionComplete:function(requestType){
        if (requestType === 'columnstate') {
           grid.autoFitColumns();
    }},
    columns: [
        { field: 'OrderID', headerText: 'Order ID',textAlign:'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
       
    ],
    height: 315
});
grid.appendTo('#Grid');

