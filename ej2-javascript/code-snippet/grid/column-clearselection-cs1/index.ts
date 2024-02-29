import { Grid, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:5},
    selectionSettings: { allowColumnSelection: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'} 
    ],
});
grid.appendTo('#Grid');

let button: Button = new Button({
  content: 'Clear Column Selection',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  grid.selectionModule.clearColumnSelection()
};