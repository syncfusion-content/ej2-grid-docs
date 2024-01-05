import { Grid, Page, ColumnMenu, Sort, Filter, ColumnMenuClickEventArgs, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnMenu, Page, Sort, Filter, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowGrouping: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    showColumnMenu: true,
    columnMenuItems: [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' },
                    ],
                },
            ],
        },
    ],
    columnMenuClick: function (args: ColumnMenuClickEventArgs) {
        if (args.item.id === 'option1') {
            // custom function
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: 'Customer Name', textAlign: 'Right', width: 150, },
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');