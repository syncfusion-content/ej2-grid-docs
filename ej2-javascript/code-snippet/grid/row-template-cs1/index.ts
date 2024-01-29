import { Grid } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: inventoryData,
    height: 315,
    columns: [
        { field: 'Inventor', headerText: 'Inventor Name', width: 180, textAlign: 'Right' },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 180 },
        { field: 'Country', headerText: 'Country', width: 140 },
        { field: 'Active', headerText: 'Active', width: 120 },
        { field: 'MainFieldsofInvention', headerText: 'Main Feilds Of Invention', width: 200}
    ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' }
    ],
    popupHeight: '240px',
    width: '120px',
    value: 'Default',
    change: valueChange
});
dropDownColumn.appendTo('#dropdownlist');

function valueChange(args: ChangeEventArgs) {
    grid.gridLines = args.value
}