import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5 },
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format: 'yMd'},
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

let filterModesData = ['Immediate', 'OnEnter'];
let dropDownList: DropDownList = new DropDownList({
    dataSource: filterModesData,
    change: onModeChange,
    width:180
});
dropDownList.appendTo('#dropdown');

function onModeChange(args: ChangeEventArgs)  {
    grid.filterSettings = { mode: args.value }
}