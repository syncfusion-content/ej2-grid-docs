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
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right'},
        { field: 'CustomerID', headerText: 'Customer Name' },
        { field: 'Freight',headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ],
    columnMenuOpen: () => {
        (document.getElementById('message') as HTMLElement).innerText = 'columnMenuOpen event is Triggered';
    },
    columnMenuClick: () => {
        (document.getElementById('message') as HTMLElement).innerText = 'columnMenuClick event is Triggered';
    },
    height:315,
});
grid.appendTo('#Grid');