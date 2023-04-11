

import { Grid, ColumnMenu, Sort, Page, Resize, Group, Filter, ColumnMenuOpenEventArgs, ColumnMenuItemModel } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(ColumnMenu, Page, Group, Sort, Resize, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    showColumnMenu: true,
    filterSettings: {type: 'Menu'},
    allowFiltering: true,
    allowGrouping: true,
    allowSorting: true,
    columnMenuOpen: function (args: ColumnMenuOpenEventArgs) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right', showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ]
});
grid.appendTo('#Grid');




