import { Grid, Filter, Page, Group, Sort, Edit, Toolbar} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Page, Group, Sort, Edit, Toolbar);

let saveButton: Button = new Button({ cssClass: 'e-success' });
saveButton.appendTo('#save');

let restoreButton: Button  = new Button({ cssClass: 'e-danger' });
restoreButton.appendTo('#restore');
// Save grid state to local storage
(document.getElementById('save')as HTMLElement).addEventListener('click', function () {
    let persistData = grid.getPersistData(); // Grid persistData
    window.localStorage.setItem("gridOrders", persistData);
    (document.getElementById("message")as HTMLElement).innerText =  "Grid state saved.";
});
// Restore grid state from local storage
(document.getElementById('restore')as HTMLElement).addEventListener('click', function () {
    let value: string = window.localStorage.getItem("gridOrders")as string; //"gridOrders" is control name + control id.
    let state = JSON.parse(value);
    if (state) {
        grid.setProperties(state);
        (document.getElementById("message")as HTMLElement).innerText = "Previous grid state restored.";
    } else {
        (document.getElementById("message")as HTMLElement).innerText = "No saved state found.";
    }
});

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    allowSorting: true,
    allowGrouping: true,
    groupSettings: { showGroupedColumn: false, columns: ["ShipCountry"] },
    editSettings: { allowEditing: true },
    toolbar: ['Edit', 'Update', 'Cancel'],
    enablePersistence: true,
    height: 230,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: "Right", isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140, validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: 140, format: 'C2', textAlign: "Right", editType: "numericedit", validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'OrderDate', width: 120, allowGrouping: false, textAlign: "Right", editType: "datetimepickeredit", format: { type: "dateTime", format: "M/d/y hh:mm a" } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100, editType: "dropdownedit", edit: { params: { popupHeight: "300px" } } }
    ],
    actionBegin:()=> {
        (document.getElementById('message')as HTMLElement).innerText  = '';
    },
});
grid.appendTo('#Grid');