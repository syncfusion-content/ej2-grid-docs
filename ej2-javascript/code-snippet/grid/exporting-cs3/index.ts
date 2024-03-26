import { Grid, Toolbar, ExcelExport, ExcelExportCompleteArgs  } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['ExcelExport', 'CsvExport'],
    allowExcelExport: true,
    height: '230px',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    toolbarClick: toolbarClick,
    excelExportComplete: excelExportComplete
});

grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_excelexport') {
         // pass undefined to use default settings
        grid.excelExport(undefined, undefined, undefined, true);
    }
    if (args.item.id === 'Grid_csvexport') {
         // pass undefined to use default settings
        grid.csvExport(undefined, undefined, undefined, true);
    }
}

function excelExportComplete(args: ExcelExportCompleteArgs ) {
    if (args && args.promise) { 
        // execute the promise to get the blob data
        args.promise.then((e: { blobData: Blob }) => {
            exportBlob(e.blobData);
        });
    }
}

function exportBlob(blob: Blob) {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let url = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}