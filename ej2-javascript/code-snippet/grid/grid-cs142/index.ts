import { Grid, Toolbar, Page, PdfExport } from '@syncfusion/ej2-grids';
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
        let selectedRecords = grid.getSelectedRecords();
            let exportProperties = {
                dataSource: selectedRecords,
            };
            grid.pdfExport(exportProperties);
        }
}