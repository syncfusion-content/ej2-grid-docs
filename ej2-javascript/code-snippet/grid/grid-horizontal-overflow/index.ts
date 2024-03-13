import { Grid, Toolbar, PdfExport,PdfExportProperties } from '@syncfusion/ej2-grids';
import { Switch } from '@syncfusion/ej2-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipAddress', headerText: 'ShipAddress', width: 130 },
        { field: 'ShipRegion', headerText: 'ShipRegion', width: 90 },
        { field: 'ShipPostalCode', headerText: 'Ship PostalCode', width: 90 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    checked: false,
});
toggle.appendTo('#switch');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let pdfExportProperties: PdfExportProperties  = {
            allowHorizontalOverflow: !((toggle as Switch).checked)
        };
        (grid as Grid).pdfExport(pdfExportProperties);
    }
}