

import { Grid } from '@syncfusion/ej2-grids';
import { productData } from './datasource.ts';

let grid: Grid = new Grid({
        dataSource: productData,
        columns: [
            { headerText: 'Discontinued', textAlign: 'Center',template: '#template', width: 120},
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 150 },
            { field: 'CategoryName', headerText: 'Category Name', width: 150 },
            { field: 'ProductName', headerText: 'Product Name', width: 150 }
        ],
        height: 315
});
grid.appendTo('#Grid');



