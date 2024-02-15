import { Grid, Toolbar, PdfExport, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs)
{
    if (args.column.field === 'Freight') {
        if ((args.value) < 30) {
            (args.style)= { backgroundColor: '#99ffcc' };
        } else if ((args.value) < 60) {
            (args.style) = { backgroundColor: '#ffffb3' };
        } else {
            (args.style) = { backgroundColor: '#ff704d' };
        }
    }
}

function queryCellInfo(args: QueryCellInfoEventArgs)
{
    let column = args.column;
    let cell = args.cell;
    let data = args.data;
    if (column.field === 'Freight') {
        let FreightData= data.Freight;
        if (FreightData < 30) {
            (cell as HTMLElement).style.background = '#99ffcc';
        } else if (FreightData < 60) {
            (cell as HTMLElement).style.background = '#ffffb3';
        } else {
           (cell as HTMLElement).style.background = '#ff704d';
        }
    }
}