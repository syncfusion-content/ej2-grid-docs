

import { Grid, Edit, Toolbar, Column } from '@syncfusion/ej2-grids';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let elem: HTMLElement;
let maskObj: MaskedTextBox;

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        {
            field: 'Mask', headerText: 'Mask', width: 140, edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                    return maskObj.value;
                },
                destroy: () => {
                    maskObj.destroy();
                },
                write: (args: { rowData: Object, column: Column }) => {
                    maskObj = new MaskedTextBox({
                        mask: "0-0-0-0",
                        value: args.rowData.Mask
                    });
                    maskObj.appendTo((args as any).element);
                }
            }
        }
    ],
    height: 265
});
grid.appendTo('#Grid');



