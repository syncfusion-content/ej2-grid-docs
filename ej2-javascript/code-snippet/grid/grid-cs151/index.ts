import { Grid, Toolbar, PdfExport,  Aggregate, ClickEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 140}
    ],
    height: 272,
    aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'ShipCountry',
            footerTemplate: 'Brazil Count: ${Custom}'
        }]
    }]
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function customAggregateFn(data) {
    const brazilCount = data.result
        ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
        : data.filter((item) => item['ShipCountry'] === 'Brazil').length;

    return ` ${brazilCount}`;
}