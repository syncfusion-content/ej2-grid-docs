

import { Grid, Group, Sort, Filter, Reorder,Resize, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort, Filter, Reorder, Resize, Toolbar );

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowGrouping: true,
    allowSorting: true,
    allowReordering: true,
    allowResizing: true,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', allowGrouping: false, allowResizing: false },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Left', allowSorting: false },
        { field: 'ShipCity', headerText: 'Ship City', width: 150, textAlign: 'Left', allowReordering: false },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Left', allowSearching: false },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', allowFiltering: false },
      ],
    height: 220
});
grid.appendTo('#Grid');




