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
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right'},
        { field: 'CustomerID', headerText: 'Customer Name', showInColumnChooser: false },
        { field: 'Freight',headerText: 'Freight', format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');