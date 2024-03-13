import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
    toolbarTemplate: '#toolbar-template',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let addRecordButton: Button = new Button({ cssClass:"e-outline"  },'#addButton');
(document.getElementById('addButton')as HTMLElement).onclick = function () {
    grid.addRecord();
};

let deleteRecordButton: Button = new Button({ cssClass: "e-outline" },'#deleteButton');
(document.getElementById('deleteButton')as HTMLElement).onclick = function () {
    var selectedRecord = grid.getSelectedRecords()[0];
    grid.deleteRecord(selectedRecord );
};