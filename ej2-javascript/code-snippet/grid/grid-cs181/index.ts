import { Grid, Selection,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection,Page)

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    selectionSettings: { type: 'Multiple', mode: 'Both', persistSelection: true, allowColumnSelection: true },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');