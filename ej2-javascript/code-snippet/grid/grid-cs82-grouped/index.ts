import { Grid, Group, Sort } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort);

let grid: Grid = new Grid({
  dataSource: data,
  allowGrouping: true,
  groupSettings: { showDropArea: false, columns: ['CustomerID'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 },
  ],
  height: 240,
});
grid.appendTo('#Grid');

let button: Button = new Button({
  content: 'Collapse or Expand Row',
})
button.appendTo('#button');

let message = document.getElementById('message');

(document.getElementById('button') as HTMLElement).onclick = () => {
  let groupedRows = Array.from(grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse'));
  let groupedRowIndex = parseInt((document.getElementById('rowIndex') as HTMLInputElement).value);
  if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
    (message as HTMLElement).innerHTML = '';
    let groupCaptionElement = groupedRows[groupedRowIndex];
    grid.groupModule.expandCollapseRows(groupCaptionElement);
  }
  else {
    (message as HTMLElement).innerHTML = 'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
  }
};