import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { headerText: 'Order Status',
          template:
            `<div>
                <select class="e-control e-dropdownlist">
                    <option value="1" selected="selected">Order Placed</option>
                    <option value="2">Processing</option>
                    <option value="3">Delivered</option>
                </select>
            </div>`, width: 200
        },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

function dropdown(args: QueryCellInfoEventArgs): void {
    let element: HTMLSelectElement = args.cell.querySelector('select');
    let dropdownObject: DropDownList = new DropDownList({ popupHeight: 150, popupWidth: 150 });
    dropdownObject.appendTo(element);
}