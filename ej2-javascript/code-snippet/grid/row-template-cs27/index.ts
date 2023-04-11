

import { Grid, Resize, Sort, Group, Filter, ColumnMenu, Page } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Resize, Sort, Group, Filter, ColumnMenu, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    allowPaging: true,
    groupSettings: { showGroupedColumn: true },
    showColumnMenu: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right',
            showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ],
    columnMenuOpen: () => {
        alert('columnMenuOpen event is Triggered');
    },
    columnMenuClick: () => {
        alert('columnMenuClick event is Triggered');
    }
});
grid.appendTo('#Grid');




