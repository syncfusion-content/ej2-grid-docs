import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { L10n } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';

Grid.Inject(Edit, Toolbar);

L10n.load({
    'en-US': {
        grid: {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
})

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    actionComplete: (args: EditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let dialog: Dialog = args.dialog;
            // set the height of the dialog
            dialog.height = 300;
            //set the width of the header
            dialog.width = 300;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { min: 1, max: 1000 }, format: 'C2', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');