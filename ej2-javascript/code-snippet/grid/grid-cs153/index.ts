import { Grid, Toolbar, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Toolbar, Page);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Print'],
    printMode: 'CurrentPage',
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

let dropdownList = ['CurrentPage', 'AllPages'];
let dropDownObject: DropDownList = new DropDownList({
    index: "0",
    width: "120",
    dataSource: dropdownList,
    change: onChange,
});
dropDownObject.appendTo('#dropdown');
function onChange(args) {
    grid.printMode = args.value;
}