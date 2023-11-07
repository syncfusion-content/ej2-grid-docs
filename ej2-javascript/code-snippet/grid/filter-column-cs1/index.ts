import { Grid, Filter, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Filter);
let typeData= ['Menu', 'CheckBox', 'Excel'];
let column: Column;
let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100 },
        { field: 'Verified', headerText: 'Verified', type: 'boolean', displayAsCheckBox: true, width: 100 },
    ],
    dataBound:() => {
        let fieldData=grid.getColumnFieldNames();
        dropDownList1.dataSource=fieldData;
    },
});
grid.appendTo('#Grid');

let dropDownList1: DropDownList = new DropDownList({
    width: 150,
    placeholder: 'Eg: OrderID',
    change: onFieldChange,
});
dropDownList1.appendTo('#dropdowncolumn');

function onFieldChange(args): void {
    dropDownList2.enabled = true;
    column = grid.getColumnByField(args.value);
}

let dropDownList2: DropDownList = new DropDownList({
    width: 150,
    placeholder: 'Eg: Excel',
    enabled: false,
    dataSource: typeData,
    change: onTypeChange,
});
dropDownList2.appendTo('#dropdownfiltertype');

function onTypeChange(args): void {
    let columnFilterSettings = { type: args.value };
    column.filter = columnFilterSettings;
    grid.refresh();
}

