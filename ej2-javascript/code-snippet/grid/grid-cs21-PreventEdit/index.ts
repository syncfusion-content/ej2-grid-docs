import { Grid, Edit, Toolbar, CellEditArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    cellEdit: cellEdit,
    columns: [
        { field: 'OrderID', headerText: 'Order ID',validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right',validationRules: { min:1, max:1000 }, width: 120, format: 'C2'},
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function cellEdit(args: CellEditArgs)
{
    if (args.value === 'France') {
      args.cancel = true;
  }
}