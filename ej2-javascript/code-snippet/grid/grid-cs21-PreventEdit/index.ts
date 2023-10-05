import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    cellEdit: cellEdit,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    pageSettings: { pageSizes: true,pageCount: 5},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', format: 'C2',validationRules: { min:1, max:1000 } , width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 272,
});
grid.appendTo('#Grid');

function cellEdit(args)
{
    if (args.value === 'France') {
      args.cancel = true;
  }
}

