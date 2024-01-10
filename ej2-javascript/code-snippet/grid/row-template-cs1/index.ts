

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let listObj: DropDownList = new DropDownList({
    dataSource: ddlData,
    id:"value",
    index:"0",
    width:"100",
    change: valueChange
});

// render initialized DropDownList
listObj.appendTo('#ddl');

let grid: Grid = new Grid({
    dataSource: data,
    gridLines: 'Default',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function valueChange(args) {
    grid.gridLines = args.value;
}