ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Sort, ej.grids.ContextMenu, ej.grids.PdfExport,  ej.grids.ExcelExport);
var values;
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowExcelExport: true,
    allowSorting: true,
    contextMenuItems: ['SortAscending', 'SortDescending', 'PdfExport', 'ExcelExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage'],
    created:() => {
        grid.contextMenuModule.contextMenu.beforeOpen = (args) => {
            if (args.event && args.event.which === 3) {
                args.cancel = true;
            }
            args.event = values;
            grid.contextMenuModule.contextMenuBeforeOpen(args);
        };
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '90', textAlign: 'Right', isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer Name', width: '100' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: '100' },
        { field: 'ShipCity', headerText: 'Ship City', width: '100' },
    ]
});
grid.appendTo('#Grid');
document.getElementById('Grid').onclick = (event) => {
    values = event;
    grid.contextMenuModule.contextMenu.open(
        values.pageY + pageYOffset,
        values.pageX + pageXOffset
    );
};