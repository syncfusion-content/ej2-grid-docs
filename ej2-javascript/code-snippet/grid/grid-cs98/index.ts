

import { Grid, Edit, Toolbar, EditEventArgs, EJ2Intance } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

document.getElementById("Grid").addEventListener("click", (e) => {
    if((event.target as Element).classList.contains("e-rowcell")){
        let gridObj: Grid = (document.getElementsByClassName("e-grid")[0] as Element).ej2_instances[0];
        let index: number = parseInt((event.target as Element).getAttribute("Index"));
        let colindex:number = parseInt((event.target as Element).getAttribute("aria-colindex"));
        let field:string = gridObj.getColumns()[colindex].field;
        gridObj.editModule.editCell(index, field);
    }
});

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');



