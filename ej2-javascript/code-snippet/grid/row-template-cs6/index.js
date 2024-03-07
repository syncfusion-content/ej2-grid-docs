ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Sort, ej.grids.ColumnMenu);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    showColumnMenu: true,
    columnMenuItems:[{text:'Clear Sorting', id:'gridclearsorting'}],
    columnMenuClick: function(args){
        if(args.item.id === 'gridclearsorting'){
            grid.clearSorting();
        }
    },
    sortSettings:{
        columns:[{direction: "Ascending", field: "OrderID"}]
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right'},
        { field: 'CustomerID', headerText: 'Customer Name', showInColumnChooser: false },
        { field: 'Freight',headerText: 'Freight', format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');