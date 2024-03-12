import { Grid, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';


let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', textAlign: 'Center', format: 'yMd', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', type: 'string', width: 120 },
    ],
    height: 315
});
grid.appendTo('#Grid');

let alignmentData: Object[] = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
];

let alignmentDropdown: DropDownList = new DropDownList({
    dataSource: alignmentData,
    index: 0,
    width: 100,
    change: changeAlignment,
});
alignmentDropdown.appendTo('#alignmentDropdown');

function changeAlignment(args: ChangeEventArgs) {
    grid.columns.forEach(function (col: Column ) {
    col.textAlign = args.value as string;
});
grid.refreshColumns();
}