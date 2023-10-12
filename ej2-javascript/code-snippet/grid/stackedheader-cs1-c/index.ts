import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowResizing: true,

  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Center',
      headerTemplate: '#orderID',
    },
    {
      headerText: 'Order Details',
      headerTemplate: '#orderDate',
      columns: [
        {
          field: 'OrderDate',
          headerText: 'Order Date',
          textAlign: 'Right',
          width: 135,
          format: 'yMd',
          minWidth: 10,
        },
        {
          field: 'Freight',
          headerText: 'Freight($)',
          textAlign: 'Right',
          width: 120,
          format: 'C2',
          minWidth: 10,
        },
      ]
    },
    {
      headerText: 'Ship Details',
      headerTemplate: '<div> <span>Ship Details</span><span>(<i class="fa fa-truck"></i>)</span></div>',
      columns: [
        {
          field: 'ShippedDate',
          headerText: 'Shipped Date',
          textAlign: 'Right',
          width: 145,
          format: 'yMd',
          minWidth: 10,
        },
        {
          field: 'ShipCountry',
          headerText: 'Ship Country',
          width: 140,
          minWidth: 10,
        },
      ],
    },
  ],
  pageSettings: { pageCount: 5 },
});
grid.appendTo('#Grid');

let dropdownData = ['Order Details', 'Order Information'];
let dropDownColumn: DropDownList = new DropDownList({
  value: 'Order Details',
  popupHeight: '200px',
  dataSource: dropdownData,
});
dropDownColumn.appendTo('#orderdate');
