

import { Grid, Edit, Toolbar, EditEventArgs, EJ2Intance } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);
let button: Button = new Button();
button.appendTo('#primarybtn');
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowAdding:true, allowEditing: true, allowDeleting:true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');
document.getElementById('primarybtn').addEventListener('click', () => {
    if (grid.element.classList.contains('disablegrid')) {
        grid.element.classList.remove('disablegrid');
        document.getElementById("GridParent").classList.remove('wrapper');
    }
    else {
        grid.element.classList.add('disablegrid');
        document.getElementById("GridParent").classList.add('wrapper');
    }
});


