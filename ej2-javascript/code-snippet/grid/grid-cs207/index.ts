import { Grid, Toolbar, PdfExport,  ClickEventArgs, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 140}
    ],
    height: 220,
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function queryCellInfo(args: QueryCellInfoEventArgs) {
    let data = (args.data).OrderID;
    switch (data) {
        case 10248:
            if ((args.column).field === 'CustomerID') {
                args.rowSpan = 2;
            }
            break;
        case 10250:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 2;
            }
            break;
        case 10252:
            if ((args.column).field === 'OrderID') {
                args.rowSpan = 3;
            }
            break;
        case 10256:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 3;
            }
            break;
        case 10261:
            if ((args.column).field === 'Freight') {
                args.colSpan = 2;
            }
            break;
    }
}

function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs)
{
    let data = (args.data).OrderID;
        switch (data) {
            case 10248:
                if ((args.column).field === 'CustomerID') {
                    (args.cell ).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column).field === 'OrderID') {
                    (args.cell ).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
}