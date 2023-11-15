import { Grid, Resize, Sort, Group, ContextMenu, Edit, Page, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Resize, Sort, Group, Edit, ContextMenu, Page, PdfExport, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    allowPaging: true,
    allowGrouping:true,
    editSettings: {allowEditing: true, allowDeleting: true},
    allowPdfExport: true,
    allowExcelExport: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Copy', 'Edit', 'Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'Group', 'Ungroup'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 90, textAlign: 'Right'},
        { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
        { field: 'Freight', width: 80, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ]
});
grid.appendTo('#Grid');




