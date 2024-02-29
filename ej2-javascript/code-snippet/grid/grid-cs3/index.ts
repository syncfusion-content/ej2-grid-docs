import { Grid, Selection, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    toolbar: ['Add', 'Update', 'Cancel'],
    selectionSettings: { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, visible: false, width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
     ],
     height: 280
});
grid.appendTo('#Grid');