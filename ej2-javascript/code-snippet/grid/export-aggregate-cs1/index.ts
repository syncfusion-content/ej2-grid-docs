import { Grid, Toolbar, ExcelExport, ClickEventArgs, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Aggregate );

function customAggregateFn(data) {
    var brazilCount = data.result
        ? data.result.filter((item: Object) => item['ShipCountry'] === 'Brazil').length
        : data.filter((item: Object) => item['ShipCountry'] === 'Brazil').length;

    return `${brazilCount}`;
}

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 150, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    aggregates: [{
        columns: [{
            type: 'Custom',
            columnName: 'ShipCountry',
            customAggregate: customAggregateFn,
            footerTemplate: 'Brazil Count: ${Custom}'
        }]
    }],
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}
