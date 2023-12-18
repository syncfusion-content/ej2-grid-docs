

import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { headerText: 'Order Status',
          template:
            `<div>
                <select class="e-control e-dropdownlist">
                    <option value="1" selected="selected">Order Placed</option>
                    <option value="2">Processing</option>
                    <option value="3">Delivered</option>
                </select>
            </div>`, width: 140
        },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

function dropdown(args: QueryCellInfoEventArgs): void {
    let dropdownElement: HTMLSelectElement = args.cell.querySelector('select');
    let dropDrown: DropDownList = new DropDownList(
        { 
            popupHeight: 150, 
            popupWidth: 150 
        });
        dropDrown.appendTo(dropdownElement);
}



