import { Grid, CommandColumn, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowDeleting: true },
    columns: [
      { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 100 },
      { field: 'CustomerID', headerText: 'Cusomer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight',textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150,textAlign: 'Right', editType: 'dropdownedit'},
      { headerText: 'Commands', width: 120, 
      commands: [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
      { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
      { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
      { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }]} 
    ],
    height: 310
});
grid.appendTo('#Grid');