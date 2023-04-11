

import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowFiltering: true,
            filterSettings: { type: 'Menu'},
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: { params: {showSpinButton: false}}},
                { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
                { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
                { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right'}
            ],
            height: 315
        });
    grid.appendTo('#Grid');



