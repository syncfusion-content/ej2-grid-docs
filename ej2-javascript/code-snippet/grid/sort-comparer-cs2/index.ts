import { Grid, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Sort);

// The custom function
let sortComparer: (reference: string, comparer:  string) => number = (reference: string,
comparer:  string) => {
    if (reference < comparer) {
        return -1;
    }
    if (reference > comparer) {
        return 1;
    }
    return 0;
};

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', sortComparer: sortComparer, width: 100, headerText: 'Customer ID' },
        { field: 'Freight', textAlign: 'Right', width: 80, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 315
});

grid.appendTo('#Grid');