

import { Grid, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'Grid' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID',headerText: 'Order ID', width: 120,textAlign: 'Right' },
        { field: 'CustomerID',headerText: 'Customer Name',width: 130 },
        { field: 'OrderDate',headerText: 'Order Date',width: 120,format: 'yMd',textAlign: 'Right' },
        { field: 'Freight',headerText: 'Freight',width: 120,format: 'C2',textAlign: 'Right' },
        { field: 'ShipCity',headerText: 'Ship City',width: 130 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    ],
    rowDrop: function(args:any){
        args.cancel = true;
        let value = [];
        for (let r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        grid.reorderRows(value, args.dropIndex);
    }
});
grid.appendTo('#Grid');



