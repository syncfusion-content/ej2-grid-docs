

import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let dialog: Dialog = args.dialog;
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
        }
    }
});
grid.appendTo('#Grid');



