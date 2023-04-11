

import { Grid, Resize, Sort, Group, ContextMenu, Edit, Page, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Resize, Sort, Group, Edit, ContextMenu, Page, PdfExport, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    allowPaging: true,
    editSettings: {allowEditing: true, allowDeleting: true},
    allowPdfExport: true,
    allowExcelExport: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
                'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
                'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
                'LastPage', 'NextPage'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right'},
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country',  width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ]
});
grid.appendTo('#Grid');




