import { Switch } from '@syncfusion/ej2-buttons';
import { Grid,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        textAlign: 'Right',
        width: 120,
      },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
      {
        field: 'ShipCity',headerText: 'Ship City',width: 150,textAlign: 'Right'
      },
      {
        field: 'ShipName',headerText: 'Ship Name',width: 150,textAlign: 'Right',
      }
    ],
    height: 315
});
grid.appendTo('#Grid');

let enableSelection = false;

let toggle: Switch = new Switch({
  change: toggleRowSelection,
  checked: enableSelection,
});
toggle.appendTo('#switch');

function toggleRowSelection() {
  grid.selectionSettings.enableSimpleMultiRowSelection = toggle.checked;
}