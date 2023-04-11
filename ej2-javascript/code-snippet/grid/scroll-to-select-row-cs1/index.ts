

import { Grid, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    height: '270',
    width: '100%',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowSelected: rowSelected
});
grid.appendTo('#Grid');

let numeric: NumericTextBox = new NumericTextBox({
    width: 200,
    min: 0,
    showSpinButton: false,
    format: 'N',
    placeholder: 'Enter index to select a row',
    change: onchange
}, '#numeric');

function onchange(): void {
    grid.selectionModule.selectRow(parseInt(numeric.getText(), 10));
}

function rowSelected(args: RowSelectEventArgs) {
    let rowHeight: number = grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
    grid.getContent().children[0].scrollTop = rowHeight * grid.getSelectedRowIndexes()[0];
}



