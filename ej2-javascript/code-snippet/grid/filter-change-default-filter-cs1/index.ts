import { Grid, Filter, Column } from '@syncfusion/ej2-grids';
import { data, stringOperatorsData, numericOperatorsData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Filter);
let column: Column;
let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 120 }
    ],
    dataBound:() => {
        let fieldData=grid.getColumnFieldNames();
        dropdownColumnList.dataSource=fieldData;
    },
});
grid.appendTo('#Grid');

let dropdownColumnList: DropDownList = new DropDownList({
    width: 150,
    placeholder: 'Eg: OrderID',
    change: onFieldChange,
});
dropdownColumnList.appendTo('#dropdownColumn');

function onFieldChange(args:ChangeEventArgs): void {
    dropdownOperatorsList.enabled = true;
    column = grid.getColumnByField(args.value);
    if (column) {    
    let availableOperators = column.type === 'string' ? stringOperatorsData : numericOperatorsData;
        dropdownOperatorsList.dataSource=availableOperators;
    }
}

let dropdownOperatorsList: DropDownList = new DropDownList({
    width: 150,
    placeholder: 'Eg: equal',
    enabled: false,
    change: onOperatorChange,
});
dropdownOperatorsList.appendTo('#dropdownOperator');

function onOperatorChange(args:ChangeEventArgs): void {
    let filterOptions = { operator: args.value, showFilterBarStatus: true };
    column.filter = filterOptions;
}