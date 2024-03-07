import { Grid, Toolbar ,PdfExport, PdfExportProperties} from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

let dropDownData = [
    { text: 'Portrait', value: 'Portrait' },
    { text: 'Landscape', value: 'Landscape' }
];

let dropDownList: DropDownList = new DropDownList({
    value: 'Portrait',
    popupHeight: '240px',
    width: 100,
    dataSource: dropDownData
});
dropDownList.appendTo('#dropdown');

function toolbarClick(args: ClickEventArgs){
    if(args.item.id === 'Grid_pdfexport') {
        let pdfExportProperties: PdfExportProperties = {
            pageOrientation: (dropDownList as DropDownList).value  as PdfExportProperties,
        };
        (grid as Grid).pdfExport(pdfExportProperties);
    }
}