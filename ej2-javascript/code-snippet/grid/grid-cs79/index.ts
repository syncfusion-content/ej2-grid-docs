

import { L10n } from '@syncfusion/ej2-base';
import { Grid, Page, Sort, Reorder, Filter, Group, Edit, Toolbar, ColumnMenu, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import arAELocalization from './locale.json';

L10n.load(arAELocalization);

Grid.Inject(Page, Sort, Reorder, Filter, Group, Edit, Toolbar, ColumnMenu, ColumnChooser );

let grid: Grid = new Grid({
    dataSource: data,
    enableRtl: true,
    locale: 'ar-AE',
    allowSorting: true,
    allowReordering: true,
    allowFiltering: true,
    allowGrouping: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Normal' },
    toolbar:  ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    allowPaging: true,
    pageSettings: { pageSize: 7 },
    showColumnMenu: true,
    showColumnChooser: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
});
grid.appendTo('#Grid');

let switchObj: Switch = new Switch({ 
    change: onSwitchChange
 });
switchObj.appendTo('#switch');

function onSwitchChange(args: ChangeEventArgs){
    if (args.checked) {
        grid.enableRtl = false;
      } else {
        grid.enableRtl = true;
      }
}