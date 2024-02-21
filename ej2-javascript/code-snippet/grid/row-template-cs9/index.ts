import { Grid, Reorder, ColumnDragEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    columnDrop: (args: ColumnDragEventArgs) => {
        (document.getElementById('message') as HTMLElement).innerText = 'columnDrop event triggered';

        if (args.column.allowReordering == true) {
            grid.getColumnByField(args.column.field).customAttributes = { class: 'customcss' };
        }
    },
    columnDragStart: (args: ColumnDragEventArgs) => {
        (document.getElementById('message') as HTMLElement).innerText = `columnDragStart event triggered`;

        if (args.column.field == 'OrderID') {
            grid.getColumnByField(args.column.field).allowReordering = false;
        }
    },
    columnDrag: (args: ColumnDragEventArgs) => {
        let index = args.target.getAttribute('data-colIndex');
        if (index) {
            (document.getElementById('message') as HTMLElement).innerText = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
        }
    },
    height: 315
});
grid.appendTo('#Grid');