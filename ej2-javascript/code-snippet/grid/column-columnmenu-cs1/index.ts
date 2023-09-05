import {
    Grid,
    Page,
    ColumnMenu,
    Sort,
    Filter,
    ColumnMenuClickEventArgs,
    Group,
} from '@syncfusion/ej2-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
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
    sortSettings: {
        columns: [{ direction: 'Ascending', field: 'OrderID' }],
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




