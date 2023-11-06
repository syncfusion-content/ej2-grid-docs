import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import {NumericTextBox} from '@syncfusion/ej2-inputs';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 135,   textAlign: 'Right' },
            { field: 'ShipName', width: 120,  textAlign: 'Right'}
        ],
    });
grid.appendTo('#Grid');

let numeric: NumericTextBox = new NumericTextBox({
    placeholder: 'select container height', 
    format: '###.##',
    min: 150, 
    step: 50,
    change: calculatePageSize,
    width: 120
});
numeric.appendTo('#numeric');

function calculatePageSize( {value }) {
    let stringValue = value.toString();
    let pageSize = grid.calculatePageSizeByParentHeight(stringValue);
    grid.pageSettings.pageSize = pageSize;
}
