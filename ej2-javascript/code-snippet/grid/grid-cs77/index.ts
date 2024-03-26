import { L10n } from '@syncfusion/ej2-base';
import { Grid, Group, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import deDELocalization from './locale.json';

Grid.Inject(Group, Page);

L10n.load(deDELocalization);

let grid: Grid = new Grid({
    dataSource: data,
    locale: 'de-DE',
    allowGrouping: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 210
});
grid.appendTo('#Grid');