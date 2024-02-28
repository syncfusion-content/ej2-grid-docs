import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import {NumericTextBox, ChangeEventArgs} from '@syncfusion/ej2-inputs';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
            { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120 }
        ]
    });
grid.appendTo('#Grid');

let numeric: NumericTextBox = new NumericTextBox({
    placeholder: 'select container height',
    format: '###.##',
    min: 150,
    step: 50,
    change: calculatePageSize,
    width: 200
});
numeric.appendTo('#numeric');

function calculatePageSize( {value}: ChangeEventArgs) {
    let stringValue = value.toString();
    let pageSize = grid.calculatePageSizeByParentHeight(stringValue);
    grid.pageSettings.pageSize = pageSize;
}
