import { Grid, RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    rowDataBound: rowDataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80, textAlign: 'Right', format:'C2' },
        { field: 'Verified', headerText: 'Verified', width: 130, displayAsCheckBox: true }
    ]
});
grid.appendTo('#Grid');

function rowDataBound(args:RowDataBoundEventArgs) {
    let count = 0;
    let keys = Object.keys(args.data);
    for (let i = 0; i < keys.length; i++) {
        if (args.data[keys[i]] == null || args.data[keys[i]] == '' || args.data[keys[i]] == undefined) {
            count++;
        }
    }
    if (count == keys.length) {
        for (let i = 0; i < grid.columns.length; i++) {
            if (grid.columns[i].displayAsCheckBox) {
                args.row.children[i].innerHTML = '';
            }
        }
    }
}



