

import { Grid, Group, Sort, Filter, Edit, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort, Filter, Edit, Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowGrouping: true,
    allowSorting: true,
    allowReordering: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', allowGrouping: false, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', allowFiltering: false, allowReordering: false, allowEditing: false, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', allowSorting: false, width: 100 }
    ],
    height: 220
});
grid.appendTo('#Grid');




