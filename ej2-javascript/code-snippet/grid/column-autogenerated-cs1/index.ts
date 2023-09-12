import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 ,format:'C2'},
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format:'yMd'}
    ],
    height: 270
});
grid.appendTo('#Grid');
grid.dataBound = () => {
    const column = grid.columns[0];
    (column as any).isPrimaryKey = 'true';
  };



