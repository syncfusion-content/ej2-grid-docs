import { Grid } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: inventoryData,
    height: 315,
    columns: [
        { field: 'Inventor', headerText: 'Name of the Inventor',width: 80  },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 100 },
        { field: 'Country', headerText: 'Country', width: 80 },
        { field: 'Number of INPADOC patents', headerText: 'Number of INPADOC patents', width: 100 },
        { field: 'MainFieldsofInvention', headerText: 'Main fields of invention', width: 100 }
    ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Ellipsis', value: 'Ellipsis' },
        { text: 'Clip', value: 'Clip' },
        { text: 'EllipsisWithTooltip', value: 'EllipsisWithTooltip' }
    ],
    popupHeight: '240px',
    width: '150',
    value: 'Ellipsis',
    change: valueChange
});
dropDownColumn.appendTo('#dropdownlist');

function valueChange(args: ChangeEventArgs) {
    grid.getColumnByField('MainFieldsofInvention').clipMode = args.value;
    grid.refresh();
}