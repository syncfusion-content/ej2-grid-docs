

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch } from '@syncfusion/ej2-buttons';

let switchObj: Switch = new Switch({ 
    change: function(args) {
        if (args.checked) {
            grid.getColumnByField('CustomerID').disableHtmlEncode = false;
        } else {
            grid.getColumnByField('CustomerID').disableHtmlEncode = true;
        }
        grid.refresh();
    } 
});

switchObj.appendTo('#element');

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<strong>Customer ID</strong>', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');



