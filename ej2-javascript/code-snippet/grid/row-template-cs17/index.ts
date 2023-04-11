

import { Grid, Edit, Page, ContextMenu } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Edit, Page, ContextMenu);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    allowPaging: true,
    contextMenuItems: ['Copy', 'Edit', 'Delete'],
    rowSelected: rowSelected,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name' },
        { field: 'Freight', format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 200 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

function rowSelected(args) {
    var contextMenuObj = grid.contextMenuModule.contextMenu;
    if (args.data.OrderID % 2 === 0) {
        contextMenuObj.enableItems(['Copy'], false);
    } else {
        contextMenuObj.enableItems(['Copy'], true);
    }
}




