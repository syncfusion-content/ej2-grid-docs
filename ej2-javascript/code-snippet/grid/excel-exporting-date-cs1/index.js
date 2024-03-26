ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ExcelExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    allowPaging: true,
    pageSettings : { pageCount: 5 },
    toolbar: ['ExcelExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 130, format:  { type: 'date', format: "EEE, MMM d, ''yy" } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', allowGrouping: false, width: 120, format: 'C2'},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 272,
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}