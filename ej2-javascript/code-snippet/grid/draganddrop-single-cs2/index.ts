

import { Grid, Page, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD,Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    allowPaging: true,
    rowDropSettings: { targetID: 'Grid' },
    selectionSettings: { type: 'Multiple' },
    pageSettings: { pageSize: 10 },
    height: 300,
    columns: [
        {
            field: 'OrderID',headerText: 'Order ID',isPrimaryKey: true,width: 80,textAlign: 'Center',
        },
        {
            field: 'CustomerID',headerText: 'Customer Name',width: 130,textAlign: 'Center',
        },
        {
            field: 'OrderDate',headerText: 'Order Date',width: 120,format: 'yMd',textAlign: 'Center',
        },
        {
            field: 'Freight',headerText: 'Freight',width: 130,format: 'C2',textAlign: 'Center',
        },
        {
            field: 'ShipCity',headerText: 'Ship City',width: 130,textAlign: 'Center',
        },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 150
        },
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



