import { Grid, Toolbar, Page, PdfExport, Filter,ClickEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageCount: 5, pageSize: 5 },
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ]
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_pdfexport') {
    // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
    let filteredRecords = (grid  as Grid).getFilteredRecords();
        let exportProperties = {
          dataSource: filteredRecords,
        };
    (grid as Grid).pdfExport(exportProperties);
    }
}