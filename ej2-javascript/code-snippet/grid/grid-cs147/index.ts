


import { Grid, Page, Toolbar, PdfExport } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');

let textbox: TextBox = new TextBox({
    placeholder: 'Enter file name:',
    width: 140,
  });
textbox.appendTo('#textboxvalue');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        if (textbox.value) {
            var pdfExportProperties = {
                fileName: textbox.value + '.pdf',
            };
            grid.pdfExport(pdfExportProperties);
        } else {
            var pdfExportProperties = {
                fileName: 'new.pdf',
            };
            grid.pdfExport(pdfExportProperties);
        }
    }
}