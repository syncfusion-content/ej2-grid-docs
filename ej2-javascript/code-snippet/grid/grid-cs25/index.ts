import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Dialog',
    },
    actionComplete: actionComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { min: 1, max: 1000 }, format: 'C2', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ]
});
grid.appendTo('#Grid');

function actionComplete(args: EditEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        const dialogInstance = args.dialog;
        dialogInstance.buttons = [
            {
                buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style' },
                click: () => {
                    grid.editModule.closeEdit();
                }
            },
            {
                buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
                click: () => {
                    grid.editModule.endEdit();
                }
            }
        ];
        dialogInstance.refresh();
    }
}