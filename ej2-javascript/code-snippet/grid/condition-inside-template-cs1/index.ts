

import { Grid } from '@syncfusion/ej2-grids';
import { productData } from './datasource.ts';

let grid: Grid = new Grid({
        dataSource: productData,
        columns: [
            {
                headerText: 'Discontinued', textAlign: 'Center',
                template: '#template', width: 120
            },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
            { field: 'ProductName', headerText: 'Name', width: 160 },
            { field: 'SupplierID', headerText: 'SupplierID', width: 80 },
            { field: 'UnitsInStock', headerText: 'Stock', width: 80, textAlign: 'Right' }
        ],
        height: 315
});
grid.appendTo('#Grid');



