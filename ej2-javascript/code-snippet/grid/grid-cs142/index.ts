import { Grid, Toolbar, Page, PdfExport,PdfExportProperties } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbarClick: toolbarClick,
    selectionSettings: {type: 'Multiple',  enableSimpleMultiRowSelection: true},
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let selectedRecords = grid.getSelectedRecords();
            let exportProperties: PdfExportProperties  = {
                dataSource: selectedRecords,
            };
            (grid as Grid).pdfExport(exportProperties);
        }
}