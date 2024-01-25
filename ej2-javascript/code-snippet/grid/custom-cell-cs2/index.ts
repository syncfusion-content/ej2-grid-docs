import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    height: 315,
    queryCellInfo: customizeCell,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ]
});
grid.appendTo('#Grid');

function customizeCell(args: QueryCellInfoEventArgs) {
    if (args.column.field === 'Freight') {
        if (args.data['Freight'] <= 30) {
            args.cell.classList.add('below-30');
        } else if (args.data['Freight'] > 30 && args.data['Freight'] < 80) {
            args.cell.classList.add('below-80');
        } else {
            args.cell.classList.add('above-80');
        }
    }
}