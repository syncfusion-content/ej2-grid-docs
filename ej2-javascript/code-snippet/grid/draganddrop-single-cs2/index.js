var grid = new ej.grids.Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    allowPaging: true,
    rowDropSettings: { targetID: 'Grid' },
    selectionSettings: { type: 'Multiple' },
    pageSettings: { pageSize: 10 },
    height: 300,
    columns: [

        {
            field: 'OrderID',headerText: 'Order ID',isPrimaryKey: true,width: 80,textAlign: 'Right',
        },
        {
            field: 'CustomerID',headerText: 'Customer Name',width: 130,textAlign: 'Left',
        },
        {
            field: 'OrderDate',headerText: 'Order Date',width: 120,format: 'yMd',textAlign: 'Right',
        },
        {
            field: 'Freight',headerText: 'Freight',width: 130,format: 'C2',textAlign: 'Right',
        },
        {
            field: 'ShipCity',headerText: 'Ship City',width: 130,textAlign: 'Left',
        },
        {   
            field: 'ShipCountry', headerText: 'Ship Country', width: 150 
        },
    ],
    rowDrop: (args) => {
        args.cancel = true;
        var value = [];
        for (var r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        grid.reorderRows(value, args.dropIndex);
    },
});
grid.appendTo('#Grid');


