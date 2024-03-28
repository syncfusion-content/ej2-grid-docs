import { Grid } from '@syncfusion/ej2-grids';
import { categoryData } from './datasource.ts';

let grid: Grid = new Grid({
        dataSource: categoryData,
        columns: [
            {
                headerText: 'Discontinued', textAlign: 'Center',
                template: '#template', width: 150
            },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 150 },
            { field: 'CategoryName', headerText: 'Category Name', width: 150 },
            { field: 'ProductName', headerText: 'Product Name', width: 150 }
        ],
        height: 315
});
grid.appendTo('#Grid');