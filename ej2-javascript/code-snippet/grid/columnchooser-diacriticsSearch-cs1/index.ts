import { Grid, Toolbar, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject( Toolbar, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columnChooserSettings : { ignoreAccent: true },
    columns: [
        { field: 'ÒrderID̂', headerText: 'Òrder ID̂', width: 120, textAlign: 'Right'},
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 130 }
    ],
    height: 272
});

grid.appendTo('#Grid');