

import { Grid, Edit, Page, ContextMenu } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Edit, Page, ContextMenu);

let values: any;
let grid: Grid = new Grid({
  dataSource: data,
  editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
  allowPaging: true,
  contextMenuItems: ['Copy', 'Edit', 'Delete'],
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
      isPrimaryKey: true,
    },
    { field: 'CustomerName', headerText: 'Customer Name' },
    {
      field: 'Freight',
      format: 'C2',
      textAlign: 'Right',
      editType: 'numericedit',
    },
    { field: 'ShipName', headerText: 'Ship Name', width: 200 },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 150,
      editType: 'dropdownedit',
    },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
  ],
  created: () => {
    grid.contextMenuModule.contextMenu.beforeOpen = (args) => {
      if (args.event && args.event.which === 3) args.cancel = true;
      args.event = values;
      grid.contextMenuModule.contextMenuBeforeOpen(args);
    };
  },
});
grid.appendTo('#Grid');

document.getElementById('Grid').onclick = (event) => {
  values = event;
  grid.contextMenuModule.contextMenu.open(
    values.pageY + pageYOffset,
    values.pageX + pageXOffset
  );
};



