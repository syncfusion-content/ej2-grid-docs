

import { Grid, Edit, IGrid, Toolbar } from '@syncfusion/ej2-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isDropdown = false;

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    actionComplete: onActionComplete,
    load: () => {
        let instance: IGrid = document.getElementById('Grid').ej2_instances[0];
        instance.element.addEventListener('mouseup', (e: MouseEventArgs) => {
            if (e.target.classList.contains("e-rowcell")) {
              if (instance.isEdit)
                  instance.endEdit();
              let rowInfo = instance.getRowInfo(e.target);
              if (rowInfo.column.field === "ShipCountry")
                  isDropdown = true;
              instance.selectRow(rowInfo.rowIndex);
              instance.startEdit();
            }
        })
    },
    height: 220
});
grid.appendTo('#Grid');

function onActionComplete(args) {
    if (args.requestType =="beginEdit" && isDropdown) {
        isDropdown = false;
        let dropdownObj = args.form.querySelector('.e-dropdownlist').ej2_instances[0];
        dropdownObj.element.focus();
        dropdownObj.showPopup();
    }
}




