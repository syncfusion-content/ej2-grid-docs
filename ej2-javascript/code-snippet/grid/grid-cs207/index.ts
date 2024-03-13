import { Grid, Toolbar, PdfExport, Column,PdfCell, ClickEventArgs, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    gridLines: 'Both',
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        {field: 'Freight', headerText: 'Freight', width: 80},
        { field: 'ShipCity', headerText: 'Ship City', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100}
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        (grid as Grid).pdfExport();
    }
}

function queryCellInfo(args: QueryCellInfoEventArgs) {
    let data = (args.data  as columnDataType).OrderID;
    switch (data) {
        case 10248:
            if ((args.column as Column).field === 'CustomerID') {
                args.rowSpan = 2;
            }
            break;
        case 10250:
            if ((args.column as Column).field === 'CustomerID') {
                args.colSpan = 2;
            }
            break;
        case 10252:
            if ((args.column as Column).field === 'OrderID') {
                args.rowSpan = 3;
            }
            break;
        case 10256:
            if ((args.column as Column).field === 'CustomerID') {
                args.colSpan = 3;
            }
            break;
        case 10261:
            if ((args.column as Column).field === 'Freight') {
                args.colSpan = 2;
            }
            break;
    }
}

function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs)
{
    let data = (args.data as columnDataType).OrderID;
        switch (data) {
            case 10248:
                if ((args.column as Column).field === 'CustomerID') {
                    (args.cell as PdfCell).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column as Column).field === 'OrderID') {
                    (args.cell as PdfCell).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column as Column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
}

interface columnDataType{
    field: number;
    OrderID:number,
    Freight:number,
    CustomerID:string,
    ShipCity:string,
    ShipCountry:string,
}

interface PdfCell {
    rowSpan: number;  
}