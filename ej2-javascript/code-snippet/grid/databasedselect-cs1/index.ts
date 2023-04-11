

import { Grid, Selection, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection, Page);

let selIndex: any = [];
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    selectionSettings: {type: "Multiple"},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowDataBound: function(args) {
        if (args.data['EmployeeID'] > 3) {
            selIndex.push(parseInt(args.row.getAttribute('aria-rowindex')));
        }
    },
    dataBound: function(args) {
        if (selIndex.length) {
            this.selectRows(selIndex);
            selIndex = [];
        }
    }
});
grid.appendTo('#Grid');



