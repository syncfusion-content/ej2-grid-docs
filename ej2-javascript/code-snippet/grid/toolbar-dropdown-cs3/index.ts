


import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
let rowIndex: any = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 200
});
grid.appendTo('#Grid');

function dataBound(): void {

    let dropDownListObject: DropDownList = new DropDownList({
        // set the data to dataSource property
        dataSource: rowIndex,
        change: change,
        popupHeight :200
    });
    dropDownListObject.appendTo('#ddlelement');
}

function change(args: ChangeEventArgs): void {
    grid.selectRow(<number>args.itemData);
}



