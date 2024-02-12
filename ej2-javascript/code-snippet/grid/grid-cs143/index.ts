import { Grid, Toolbar, Page, PdfExport } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City',visible: false, width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    value: 'Enable or disable includeHiddenColumn property'
});
toggle.appendTo('#switch');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        var pdfExportProperties = {
            includeHiddenColumn: toggle.checked,
        };
        grid.pdfExport(pdfExportProperties);
    }
}