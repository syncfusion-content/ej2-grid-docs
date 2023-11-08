import { Grid, Toolbar, PdfExport } from '@syncfusion/ej2-grids';
import { data, changedData} from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 140}
    ],
    height: 220
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args['item'].id === 'Grid_pdfexport') { 
        let pdfExportProperties = {
            dataSource: changedData,
        };
        grid.pdfExport(pdfExportProperties);
    } 
}