

import { Grid, Edit, IGrid, Toolbar } from '@syncfusion/ej2-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    load: () => {
        let instance: IGrid = document.getElementById('Grid').ej2_instances[0];
        instance.element.addEventListener('mouseup', (e: MouseEventArgs) => {
            if (e.target.classList.contains("e-rowcell")) {
            if (instance.isEdit)
                instance.endEdit();
                let index: number = parseInt(e.target.getAttribute("Index"));
                instance.selectRow(index);
                instance.startEdit();
            }
        })
    }
    height: 220
});
grid.appendTo('#Grid');



