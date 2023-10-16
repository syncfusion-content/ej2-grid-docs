import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100, valueAccessor: currencyFormatter },
        { field: 'ShipCity', headerText: 'Ship City', width: 180, valueAccessor: concatenateFields }
    ],
    height: 315
});
grid.appendTo('#Grid');

function currencyFormatter(field: string, data: Object, column: Object): string {
    return '€' + data['Freight'];
}

function concatenateFields(field: string, data: Object, column: Object): string {
    return data[field] + ' - ' + data['ShipRegion'];
}