ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.Sort, ej.grids.Edit, ej.grids.ContextMenu, ej.grids.PdfExport,  ej.grids.ExcelExport);
var grid = new ej.grids.Grid({    
    dataSource: data,
    allowSorting: true,
    allowPaging: true,
    allowGrouping:true,
    editSettings: {allowEditing: true, allowDeleting: true},
    allowPdfExport: true,
    allowExcelExport: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Copy', 'Edit', 'Delete', 'Save', 'Cancel','PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'Group', 'Ungroup'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 150, textAlign: 'Right', isPrimaryKey:true},
        { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
        { field: 'Freight', headerText:'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 }
    ]
});
grid.appendTo('#Grid');