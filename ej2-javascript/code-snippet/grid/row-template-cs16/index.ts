import { Grid, Page, ContextMenu, ExcelExport, PdfExport, Sort, MouseEvent, BeforeOpenCloseMenuEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject( Page, ContextMenu, ExcelExport, PdfExport, Sort);

let values: any;
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowPdfExport: true,
  allowExcelExport: true,
  allowSorting: true,
  contextMenuItems: ['SortAscending', 'SortDescending', 'PdfExport', 'ExcelExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: '90', textAlign: 'Right', isPrimaryKey: true },
    { field: 'CustomerID', headerText: 'Customer Name', width: '100' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: '100' },
    { field: 'ShipCity', headerText: 'Ship City', width: '100' },
  ],
  created: () => {
    grid.contextMenuModule.contextMenu.beforeOpen = (args:BeforeOpenCloseMenuEventArgs) => {
      if (args.event && args.event.which === 3) args.cancel = true;
      args.event = values;
      grid.contextMenuModule.contextMenuBeforeOpen(args);
    };
  },
});
grid.appendTo('#Grid');

(document.getElementById('Grid') as HTMLElement).onclick = (event: MouseEvent) => {
  values = event;
  grid.contextMenuModule.contextMenu.open(
    values.pageY + pageYOffset,
    values.pageX + pageXOffset
  );
};