

import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    rowDataBound: rowDataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right' },
        { field: 'ShipName', headerText: 'Ship Name', width: 180 },
        { field: 'Verified', headerText: 'Verified', width: 150, displayAsCheckBox: true },
    ]
});
grid.appendTo('#Grid');

function rowDataBound(args) {
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



