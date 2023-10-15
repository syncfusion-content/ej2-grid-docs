import { Switch } from '@syncfusion/ej2-buttons';
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch',showConfirmDialog:false, showDeleteConfirmDialog:false },
    pageSettings: { pageSizes: true,pageCount: 5},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2',validationRules: { min:1, max:1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
  change: toggleShowConfirmDialog,
});
toggle.appendTo('#switch');

function toggleShowConfirmDialog()
{
   grid.editSettings.showConfirmDialog = toggle.checked;
}

let toggleDelete: Switch = new Switch({
  change: toggleShowDeleteConfirmDialog,
});
toggleDelete.appendTo('#switchDelete');

function toggleShowDeleteConfirmDialog()
{
  grid.editSettings.showDeleteConfirmDialog = toggleDelete.checked;
}