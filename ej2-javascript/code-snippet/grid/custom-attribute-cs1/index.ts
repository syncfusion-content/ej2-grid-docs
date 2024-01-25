import { Grid, Page } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { inventoryData } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: inventoryData,
  allowPaging: true,
  allowTextWrap: true,
  textWrapSettings: { wrapMode: 'Content' },
  height: 400,
  columns: [
    { field: 'Inventor', headerText: 'Inventor Name', width: 180, textAlign: 'Right' },
    { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 180, textAlign: 'Right' },
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Active', width: 120 },
    { field: 'Mainfieldsofinvention', headerText: 'Main Feilds Of Invention', width: 200 }
  ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
  dataSource: [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' }
  ],
  popupHeight: '240px',
  width: '120px',
  value: 'Content',
  change: valueChange,
});
dropDownColumn.appendTo('#dropdownlist');

function valueChange(args: ChangeEventArgs) {
  grid.textWrapSettings.wrapMode = args.value;
}