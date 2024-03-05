import { Grid } from '@syncfusion/ej2-grids';
import { orderDetails } from './datasource.ts';
import { CheckBox, ChangeEventArgs} from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: orderDetails,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right' },
      { field: 'CustomerID', headerText: 'Customer Name', width: '150' },
      { field: 'OrderDate', headerText: 'Order Date', width: '130', format: 'yMd', textAlign: 'Right' },
      { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right' },
      { field: 'ShippedDate', headerText: 'Shipped Date', width: '130', format: 'yMd', textAlign: 'Right' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: '150' }
    ]
});
grid.appendTo('#Grid');

let checkbox: CheckBox = new CheckBox({ label: 'Show / Hide Row', change: onCheckBoxChange  });
checkbox.appendTo('#checkbox');

let hiddenRows = [];
let message = (document.getElementById('message')as HTMLElement);

function onCheckBoxChange(args:ChangeEventArgs) {
  if (args.checked) {
    for (let i = 0; i < grid.getRowsObject().length; i++) {
      if (grid.getRowsObject()[i].data.CustomerID === 'VINET') {
        // check the row value
        let rowIndex:number = grid.getRowsObject()[i].index; //get particular row index
        grid.getRowByIndex(rowIndex).style.display = 'none'; //hide row
        hiddenRows.push(rowIndex); // add row index to hiddenRows array
      }
    }
    if (hiddenRows.length > 0) {
      message.innerText  = 'Rows with a customer name column value of VINET have been hidden';
    }
  } else {
    // Show hidden rows
    hiddenRows.forEach((rowIndex) => {
      grid.getRowByIndex(rowIndex).style.display = '';
    });
    hiddenRows = [];
    message.innerText  = 'Show all hidden rows';
  }
}