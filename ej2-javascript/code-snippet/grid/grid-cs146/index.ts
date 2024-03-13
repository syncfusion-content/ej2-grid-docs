import { Grid, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { DropDownList} from '@syncfusion/ej2-dropdowns';
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
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');

let dropdownData = [
    { text: 'Letter', value: 'Letter' },
    { text: 'Note', value: 'Note' },
    { text: 'Legal', value: 'Legal' },
    { text: 'A0', value: 'A0' },
    { text: 'A1', value: 'A1' },
    { text: 'A2', value: 'A2' },
    { text: 'A3', value: 'A3' },
    { text: 'A4', value: 'A4' },
    { text: 'A5', value: 'A5' },
    { text: 'A6', value: 'A6' },
    { text: 'A7', value: 'A7' },
    { text: 'A8', value: 'A8' },
    { text: 'B0', value: 'B0' },
    { text: 'B1', value: 'B1' },
    { text: 'B2', value: 'B2' },
    { text: 'B3', value: 'B3' },
    { text: 'B4', value: 'B4' },
    { text: 'B5', value: 'B5' },
    { text: 'Archa', value: 'Archa' },
    { text: 'Archb', value: 'Archb' },
    { text: 'Archc', value: 'Archc' },
    { text: 'Archd', value: 'Archd' },
    { text: 'Arche', value: 'Arche' },
    { text: 'Flsa', value: 'Flsa' },
    { text: 'HalfLetter', value: 'HalfLetter' },
    { text: 'Letter11x17', value: 'Letter11x17' },
    { text: 'Ledger', value: 'Ledger' }
];

let dropDownList: DropDownList = new DropDownList({
    value: 'Letter',
    popupHeight: '240px',
    width: 100,
    dataSource: dropdownData
});
dropDownList.appendTo('#dropdown');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let exportProperties: PdfExportProperties = {
            pageSize: (dropDownList as DropDownList).value as PdfExportProperties
        };
        (grid as Grid).pdfExport(exportProperties);
    }
}



