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
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, allowGrouping: false, allowResizing: false },
      { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Left', width: 150, allowSorting: false },
      { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Left', width: 150, allowReordering: false },
      { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Left', width: 150, allowSearching: false },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 150, format: 'C2', allowFiltering: false }
      ],
    height: 220
});
grid.appendTo('#Grid');