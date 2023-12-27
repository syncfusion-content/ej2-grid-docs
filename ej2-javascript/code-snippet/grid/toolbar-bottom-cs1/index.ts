import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data ,
    toolbar: ['Print', 'Search'],
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', type: 'number', isPrimaryKey:true , width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 100 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', type:'number', format: 'C2', width: 80 },
      { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', type:'date', format: 'yMd', width: 100}
    ],
    height: 200,
    created: () => {
    let toolbar: HTMLElement = grid.element.querySelector('.e-toolbar');
    grid.element.appendChild(toolbar);
  }
});
grid.appendTo('#Grid');