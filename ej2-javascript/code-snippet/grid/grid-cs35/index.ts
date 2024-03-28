import { Grid, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: {  allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID',validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight',editType: 'numericedit', textAlign: 'Right', width: 120,validationRules: { required: true,min:1, max:1000 }, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country',editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');