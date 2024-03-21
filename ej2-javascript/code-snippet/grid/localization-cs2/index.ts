import { L10n } from '@syncfusion/ej2-base';
import { Grid, Group, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import frFRLocalization from './locale.json';

Grid.Inject(Group, Page, Edit, Toolbar);

L10n.load(frFRLocalization);

let grid: Grid = new Grid({
    dataSource: data,
    locale: 'fr-FR',
    allowGrouping: true,
    allowPaging: true,
    editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true},
    toolbar:['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    pageSettings: { pageSize: 6 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');