

import { Grid, Toolbar, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject( Toolbar, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columnChooserSettings: { operator: 'contains' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 130 }
    ],
    height: 235
});

grid.appendTo('#Grid');



