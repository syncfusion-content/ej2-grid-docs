

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', width: 120, format: { type:'date', format:'dd.MM.yyyy' } ,editType: 'datepickeredit', edit: { params: { format:'dd.MM.yy' }  } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2', edit: { params: { decimals: 2, value: 5 } } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, edit: { params: { value: 'Germany' } } },
        { field: 'Verified', displayAsCheckBox: true,editType: "booleanedit", textAlign: 'Center',width: 100,  edit: { params: { checked: true} }
    ],
    height: 265
});
grid.appendTo('#Grid');



